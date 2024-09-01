export type ActionResult<T> = {
  isSuccess: boolean;
  message: string;
  data?: T;
};
