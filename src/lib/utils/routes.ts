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
    LIST: '/api/v1/products',
    LIMIT: (page: number, limit: number) => `/api/v1/products?page=${page}&limit=${limit}`,
    DETAIL: (id: number) => `/api/v1/products/${id}`,
    FEATURED: '/api/v1/products?isFeatured=true',
    NEWEST: '/api/v1/products?sortBy=created_at&sortOrder=desc',
    SORT_PRICE:'/api/v1/products?sortBy=price&sortOrder=asc',
    SEARCH: (query: string) => `/api/v1/products?search=${query}`,
    PRICE_RANGE: (min: number, max: number) => `/api/v1/products?priceMin=${min}&priceMax=${max}`,
    COMPLEX: (categoryId: number, search: string, min: number, sortBy: string, sortOrder: string) => `/api/v1/products?categoryId=${categoryId}&search=${search}&minPrice=${min}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
  },
  
  // Categories API (app/api/v1/categories/)
  CATEGORIES: {
    LIST: '/api/v1/categories',
    DETAIL: (id: string) => `/api/v1/categories/${id}`,
    PRODUCTS: (id: string) => `/api/v1/categories/${id}/products`,
  },
  
  // Cart API (app/api/v1/cart/)
  CART: {
    BASE: '/api/v1/cart',
    ITEM: (id: string) => `/api/v1/cart/${id}`,
    CLEAR: '/api/v1/cart/clear',
  },
  
  // Orders API (app/api/v1/orders/)
  ORDERS: {
    BASE: '/api/v1/orders',
    DETAIL: (id: string) => `/api/v1/orders/${id}`,
    CANCEL: (id: string) => `/api/v1/orders/${id}/cancel`,
    TRACKING: (orderNumber: string) => `/api/v1/orders/tracking/${orderNumber}`,
  },
  
  // Users API (app/api/v1/users/)
  USERS: {
    PROFILE: '/api/v1/users/profile',
    ADDRESSES: '/api/v1/users/addresses',
    ADDRESS: (id: string) => `/api/v1/users/addresses/${id}`,
    WISHLIST: '/api/v1/users/wishlist',
    WISHLIST_ITEM: (productId: string) => `/api/v1/users/wishlist/${productId}`,
  },
  
  // Reviews API (app/api/v1/reviews/)
  REVIEWS: {
    BASE: '/api/v1/reviews',
    BY_PRODUCT: (productId: string) => `/api/v1/reviews?productId=${productId}`,
    CREATE: '/api/v1/reviews',
  },
  
  // Promotions API (app/api/v1/promotions/)
  PROMOTIONS: {
    LIST: '/api/v1/promotions',
    DETAIL: (id: string) => `/api/v1/promotions/${id}`,
    ACTIVE: '/api/v1/promotions?active=true',
  },
  
  // Checkout API (app/api/v1/checkout/)
  CHECKOUT: {
    CREATE: '/api/v1/checkout',
    VERIFY: '/api/v1/checkout/verify',
    CALLBACK: '/api/v1/checkout/callback',
  },
  
  // Upload API (app/api/v1/upload/)
  UPLOAD: {
    IMAGE: '/api/v1/upload/image',
    DOCUMENT: '/api/v1/upload/document',
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