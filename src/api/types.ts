export interface ApiResponse<T> {
  data: T | T[];
  success: boolean;
}
