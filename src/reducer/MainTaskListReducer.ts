export type State = {
  isRegisterChildTaskDialg: boolean;
  isDetailMainTaskDialog: boolean;
};

export type Action = {
  type: // ChildTaskの登録用ダイアログ
  | "openRegisterChildTaskDialog"
    | "closeRegisterChildTaskDialog"
    // MainTaskの詳細用ダイアログ
    | "openDetailMainTaskDialog"
    | "closeDetailMainTaskDialog";
};

export const initialState: State = {
  isRegisterChildTaskDialg: false,
  isDetailMainTaskDialog: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "openRegisterChildTaskDialog":
      return {
        ...state,
        isRegisterChildTaskDialg: true,
      };
    case "closeRegisterChildTaskDialog":
      return {
        ...state,
        isRegisterChildTaskDialg: false,
      };
    case "openDetailMainTaskDialog":
      return {
        ...state,
        isDetailMainTaskDialog: true,
      };
    case "closeDetailMainTaskDialog":
      return {
        ...state,
        isDetailMainTaskDialog: false,
      };
    default:
      return state;
  }
};
