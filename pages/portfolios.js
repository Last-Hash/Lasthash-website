import { fetchAPI } from '../utils/api';
import Portfolio from './portfolios/[page]';

const DEFAULT_PAGE_SIZE = 2;

export async function getStaticProps() {
  try {
    const portfolioResponse = await fetchAPI("/portfolios", {
      sort: ['id:desc'],
      pagination: {
        page: 1,
        pageSize: DEFAULT_PAGE_SIZE
      },
      populate: ['ThumbnailImage', 'technologies', 'portfolio_categories']
    });

    if (!portfolioResponse?.data) {
      throw new Error('Invalid API response');
    }

    return {
      props: {
        portfolios: portfolioResponse.data,
        pagination: portfolioResponse.meta.pagination,
        currentPage: 1,
        isLoading: false,
        error: false
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return {
      props: {
        portfolios: [],
        pagination: {
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE,
          pageCount: 0,
          total: 0
        },
        currentPage: 1,
        isLoading: false,
        error: true
      }
    };
  }
}

export default Portfolio;