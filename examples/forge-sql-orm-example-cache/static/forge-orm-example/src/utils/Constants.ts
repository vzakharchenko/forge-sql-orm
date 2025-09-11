export interface UserResponse {
  id: number;
  name?: string;
  email?: string;
}

export interface DuplicateResponse {
  count: number;
  name?: string;
  email?: string;
}
