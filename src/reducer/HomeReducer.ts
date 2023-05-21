import { Tasks } from "../pages/Home";

export type State = {
  tasks: Tasks[];
};

export type Action = {
  type: "getTasks";
  data: Tasks[];
};

export const initialState: State = {
  tasks: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "getTasks":
      return {
        ...state,
        tasks: action.data,
      };
    default:
      return state;
  }
};
