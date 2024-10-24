/** @format */

export interface PayloadAction<T> {
  payload: T;
  type: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
