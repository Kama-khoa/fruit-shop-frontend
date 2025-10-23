import { User, AuthState } from "@/types/auth";

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export type AuthAction =
  | { type: 'INITIALIZE'; payload: { isAuthenticated: boolean; user: User | null } }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT_SUCCESS' }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'UPDATE_USER'; payload: User };

// --- REDUCER FUNCTION ---
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'INITIALIZE':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        isLoading: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
        isLoading: false,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...initialState,
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};