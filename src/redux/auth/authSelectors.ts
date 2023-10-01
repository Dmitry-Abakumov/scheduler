import { RootState } from "../store";

export const getAuthError = ({ auth: { error } }: RootState) => error;
