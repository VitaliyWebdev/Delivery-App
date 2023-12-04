export type TInitialValues = {
  email: string;
  password: string;
};

export type TCommonForm = {
  onSubmit: (values: TInitialValues) => void;
  submitLabel: string;
};
