declare interface ReducerAction<T = string, P = {}> {
  type: T;
  payload?: P;
}

declare type ReducerDispatch<T = string, P = {}> = (
  action: ReducerAction<T, P>,
) => void;
