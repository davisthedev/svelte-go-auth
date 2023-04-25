import { writable } from 'svelte/store';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false
};

const createAuthStore = () => {
  const { subscribe, set, update } = writable<AuthState>(initialState);

  return {
    subscribe,
    setToken: (token: string) => {
      localStorage.setItem('authToken', token);
      update((state) => {
        return { ...state, token, isAUthenticated: true };
      });
    },
    removeToken: () => {
      localStorage.removeItem('authToken');
      set(initialState);
    },
    initialize: () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        update((state) => {
          return { ...state, token, isAuthenticated: true };
        });
      }
    },
  };
};

export const authStore = createAuthStore();
