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
 * @param {string} path Path of the API route
 * @param {Object} urlParams URL parameters
 * @param {Object} options Fetch options
 * @returns {Promise<Object>} Parsed API response
 */
export async function fetchAPI(path, urlParams = {}, options = {}) {
  // Validate path
  if (!path || typeof path !== 'string') {
    console.error('Invalid path provided to fetchAPI');
    return { data: [], meta: { pagination: { total: 0 } } };
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    method: 'GET',
    ...options,
  };

  try {
    // Build request URL with proper encoding
    const queryString = qs.stringify(urlParams, {
      encodeValuesOnly: true, // encode only values, not keys
      arrayFormat: 'brackets' // handle arrays properly
    });
    
    const requestUrl = `${getApiURL()}${normalizedPath}${queryString ? `?${queryString}` : ""}`;

    // Debug logging
    const debug = process.env.NEXT_PUBLIC_DEBUG === 'true';
    if (debug) {
      console.log('[API Request]', {
        url: requestUrl,
        method: mergedOptions.method,
        params: urlParams
      });
    }

    // Make API call with timeout
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 10000)
    );
    
    const fetchPromise = fetch(requestUrl, mergedOptions);
    const response = await Promise.race([fetchPromise, timeoutPromise]);

    // Enhanced error handling
    if (!response.ok) {
      const errorText = await response.text();
      const errorDetail = {
        status: response.status,
        statusText: response.statusText,
        url: requestUrl,
        body: errorText
      };

      console.error('[API Error]', errorDetail);
      
      // Return structured error response
      return {
        data: [],
        meta: { 
          pagination: { total: 0 },
          error: {
            status: response.status,
            message: response.statusText
          }
        }
      };
    }

    const data = await response.json();

    if (debug) {
      console.log('[API Response]', {
        url: requestUrl,
        data: data
      });
    }

    return data;

  } catch (error) {
    // Handle different error types
    const errorMessage = error.name === 'AbortError' 
      ? 'Request was aborted'
      : error.name === 'TimeoutError'
      ? 'Request timed out'
      : error.message;

    console.error('[API Error]', {
      message: errorMessage,
      originalError: error
    });

    // Return structured error response
    return {
      data: [],
      meta: {
        pagination: { total: 0 },
        error: {
          message: errorMessage,
          type: error.name
        }
      }
    };
  }
}