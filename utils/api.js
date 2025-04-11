import qs from "qs";

/**
 * Get full Strapi API URL
 * @returns {string} Base API URL
 */
export function getApiURL() {
  return process.env.NEXT_PUBLIC_API_URL || 'https://admin.lasthash.com/api';
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route (e.g., "/technologies")
 * @param {Object} params URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, params = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(params);
  const requestUrl = `${getApiURL()}${path}${queryString ? `?${queryString}` : ""}`;
  
  // Debug logging if enabled
  const debug = process.env.NEXT_PUBLIC_DEBUG === 'true';
  if (debug) {
    console.log('API Request URL:', requestUrl);
    console.log('API Params:', params);
  }

  try {
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error(response.statusText);
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Debug response if enabled
    if (debug) {
      console.log('API Response:', data);
    }
    
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    return { data: [], meta: { pagination: { total: 0 } } };
  }
}