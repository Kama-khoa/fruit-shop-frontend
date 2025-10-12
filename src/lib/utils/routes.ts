export const ROUTES = {
  // Root & Main
  ROOT: '/',
  HOME: '/',
  
  // Auth routes (app/auth/)
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forget_pass',
    VERIFY_EMAIL: '/auth/verify-email',
  },
  
  // Main app routes (app/main/)
  MAIN: {
    HOME: '/',
    
    // About Us
    ABOUT: '/main/about_us',
    
    // Products
    PRODUCTS: {
      LIST: '/main/products',
      DETAIL: (slug: string) => `/main/products/${slug}`,
      CATEGORY: (category: string) => `/main/products?category=${category}`,
    },
    
    // Categories
    CATEGORIES: {
      LIST: '/main/categories',
      DETAIL: (slug: string) => `/main/categories/${slug}`,
      FRUITS: '/main/categories/fruits',
      VEGETABLES: '/main/categories/vegetables',
      MEAT: '/main/categories/meat',
      DRINKS: '/main/categories/drinks',
    },
    
    // Shopping
    CART: '/main/cart',
    CHECKOUT: {
      BASE: '/main/checkout',
      SUCCESS: '/main/checkout/success',
      CANCEL: '/main/checkout/cancel',
    },

    // Promotions
    PROMOTIONS: '/main/promotions',
    
    // News/Blog
    NEWS: {
      LIST: '/main/news',
      DETAIL: (slug: string) => `/main/news/${slug}`,
    },
    
    // Policies
    POLICIES: {
      BASE: '/main/policies',
      SHIPPING: '/main/policies/shipping',
      RETURN: '/main/policies/return',
      PRIVACY: '/main/policies/privacy',
      TERMS: '/main/policies/terms',
    },
    
    // Contact
    CONTACT: '/main/contact',
    
    // User Profile & Account
    PROFILE: {
      BASE: '/main/profile',
      ORDERS: '/main/profile/orders',
      ORDER_DETAIL: (id: string) => `/main/profile/orders/${id}`,
      ADDRESSES: '/main/profile/addresses',
      WISHLIST: '/main/profile/wishlist',
      SETTINGS: '/main/profile/settings',
    },
  },
  
  // Company Info
  COMPANY: {
    CAREERS: '/main/about_us/careers',
    INVESTORS: '/main/about_us/investors',
    STORES: '/main/about_us/stores',
    REVIEWS: '/main/about_us/reviews',
    COMMUNITY: '/main/about_us/community',
  },
  
  // Support
  SUPPORT: {
    CENTER: '/main/contact',
    RETURNS: '/main/policies/return',
    FAQ: '/main/contact/faq',
  },
} as const;

// API Routes (for internal API calls)
export const API_ROUTES = {
  // Auth API (app/api/auth/)
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REGISTER: '/api/v1/auth/register',
    LOGOUT: '/api/v1/auth/logout',
    REFRESH: '/api/v1/auth/refresh',
    ME: '/api/v1/auth/me',
  },
  
  // Products API (app/api/products/)
  PRODUCTS: {
    LIST: '/api/products',
    DETAIL: (id: string) => `/api/products/${id}`,
    FEATURED: '/api/products?featured=true',
    NEW_ARRIVALS: '/api/products?new=true',
    SEARCH: (query: string) => `/api/products?search=${query}`,
  },
  
  // Categories API (app/api/categories/)
  CATEGORIES: {
    LIST: '/api/categories',
    DETAIL: (id: string) => `/api/categories/${id}`,
    PRODUCTS: (id: string) => `/api/categories/${id}/products`,
  },
  
  // Cart API (app/api/cart/)
  CART: {
    BASE: '/api/cart',
    ITEM: (id: string) => `/api/cart/${id}`,
    CLEAR: '/api/cart/clear',
  },
  
  // Orders API (app/api/orders/)
  ORDERS: {
    BASE: '/api/orders',
    DETAIL: (id: string) => `/api/orders/${id}`,
    CANCEL: (id: string) => `/api/orders/${id}/cancel`,
    TRACKING: (orderNumber: string) => `/api/orders/tracking/${orderNumber}`,
  },
  
  // Users API (app/api/users/)
  USERS: {
    PROFILE: '/api/users/profile',
    ADDRESSES: '/api/users/addresses',
    ADDRESS: (id: string) => `/api/users/addresses/${id}`,
    WISHLIST: '/api/users/wishlist',
    WISHLIST_ITEM: (productId: string) => `/api/users/wishlist/${productId}`,
  },
  
  // Reviews API (app/api/reviews/)
  REVIEWS: {
    BASE: '/api/reviews',
    BY_PRODUCT: (productId: string) => `/api/reviews?productId=${productId}`,
    CREATE: '/api/reviews',
  },
  
  // Promotions API (app/api/promotions/)
  PROMOTIONS: {
    LIST: '/api/promotions',
    DETAIL: (id: string) => `/api/promotions/${id}`,
    ACTIVE: '/api/promotions?active=true',
  },
  
  // Checkout API (app/api/checkout/)
  CHECKOUT: {
    CREATE: '/api/checkout',
    VERIFY: '/api/checkout/verify',
    CALLBACK: '/api/checkout/callback',
  },
  
  // Upload API (app/api/upload/)
  UPLOAD: {
    IMAGE: '/api/upload/image',
    DOCUMENT: '/api/upload/document',
  },
} as const;

// Route helpers
export const isAuthRoute = (pathname: string): boolean => {
  return pathname.startsWith('/auth');
};

export const isMainRoute = (pathname: string): boolean => {
  return pathname.startsWith('/main');
};

export const isProtectedRoute = (pathname: string): boolean => {
  const protectedPaths = [
    '/main/profile',
    '/main/cart',
    '/main/checkout',
  ];
  return protectedPaths.some(path => pathname.startsWith(path));
};

// Navigation helper
export const getRedirectAfterLogin = (intendedRoute?: string): string => {
  if (intendedRoute && !isAuthRoute(intendedRoute)) {
    return intendedRoute;
  }
  return ROUTES.MAIN.HOME;
};