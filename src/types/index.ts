export type LoginInput = {
  email: string;
  password: string;
};
export interface AuthFormProps {
  variant: "SIGNIN" | "SIGNUP";
  title: string;
  api: string;
}
export type ErrRes = {
  error?: string;
  message?: string;
};

export type clientInfo = {
  email: string;
  name: string;
  _id: string;
};


export type MileStone = {
  name: string;
  amount: number;
  description: string;
  paymentDone: boolean;
  _id: string;
}
export type Tasks = {
  _id: string;
  clientId: string;
  clientName: string;
  createdAt: string;
  documentation: string;
  projectAmount: number;
  projectStatus: string;
  taskDescription: string;
  taskName: string;
  skills: [];
  fullPaymentDone: string;
  projectpaymentway: MileStone[];
  OneTimePayment: boolean;
  fieldType: string[];
}

export type DecodedToken = {
  _id: string;
  role: string;
  iat: number;
};
