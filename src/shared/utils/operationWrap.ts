// import { AxiosError } from "axios";

// export const operatiopnWrap = (operation: Function) => {
//   const fn = async () => {
//     const args = operation(...args)

//     try {
//       await operation();
//     } catch (error) {
//       const { response } = error as AxiosError;
//       return rejectWithValue(response?.data);
//     }
//   };

//   return fn;
// };

// import { Request, Response, NextFunction } from "express";

// type Ctrl = (
//   req: Request<any>,
//   res: Response,
//   next: NextFunction
// ) => Promise<any>;

// export const ctrlWrapper = (ctrl: Ctrl): Ctrl => {
//   const fn: Ctrl = async (req, res, next) => {
//     try {
//       await ctrl(req, res, next);
//     } catch (err) {
//       next(err);
//     }
//   };

//   return fn;
// };
export {};
