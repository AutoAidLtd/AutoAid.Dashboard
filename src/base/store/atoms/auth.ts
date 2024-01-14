import { atom } from 'recoil';

interface AuthState {
	isLoggedIn: boolean,
    isInitialized: boolean,
    user: any,
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
  },
});
