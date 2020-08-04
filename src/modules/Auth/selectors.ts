export const isAuthorized = (state: any) => state.auth.isAuthorized;
export const getErrors = (state: any) => state.auth.authError;
export const isLoading = (state: any) => state.auth.isLoading;
export const getToken = (state: any) => state.auth.token;