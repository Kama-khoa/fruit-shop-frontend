'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ROUTES } from './routes';

/**
 * Custom navigation hook with utility functions
 */
export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const navigateToProduct = (slug: string) => {
    router.push(ROUTES.MAIN.PRODUCTS.DETAIL(slug));
  };

  const navigateToCategory = (slug: string) => {
    router.push(ROUTES.MAIN.CATEGORIES.DETAIL(slug));
  };

  const navigateToNews = (slug: string) => {
    router.push(ROUTES.MAIN.NEWS.DETAIL(slug));
  };

  const goBack = () => {
    router.back();
  };

  const goToCart = () => {
    router.push(ROUTES.MAIN.CART);
  };

  const goToCheckout = () => {
    router.push(ROUTES.MAIN.CHECKOUT.BASE);
  };

  const goToLogin = (returnUrl?: string) => {
    const url = returnUrl 
      ? `${ROUTES.AUTH.LOGIN}?returnUrl=${encodeURIComponent(returnUrl)}`
      : ROUTES.AUTH.LOGIN;
    router.push(url);
  };

  const goToProfile = () => {
    router.push(ROUTES.MAIN.PROFILE.BASE);
  };

  const isCurrentPath = (path: string): boolean => {
    return pathname === path;
  };

  const isActiveRoute = (basePath: string): boolean => {
    return pathname?.startsWith(basePath) || false;
  };

  return {
    navigateTo,
    navigateToProduct,
    navigateToCategory,
    navigateToNews,
    goBack,
    goToCart,
    goToCheckout,
    goToLogin,
    goToProfile,
    isCurrentPath,
    isActiveRoute,
    pathname,
    searchParams,
  };
};

/**
 * Build URL with query parameters
 */
export const buildUrl = (
  basePath: string, 
  params?: Record<string, string | number | boolean>
): string => {
  if (!params || Object.keys(params).length === 0) {
    return basePath;
  }

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });

  return `${basePath}?${searchParams.toString()}`;
};

/**
 * Get return URL from query params
 */
export const getReturnUrl = (searchParams: URLSearchParams): string => {
  return searchParams.get('returnUrl') || ROUTES.MAIN.HOME;
};