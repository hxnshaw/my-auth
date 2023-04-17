export interface ILoginResponse {
  status: string;
  message: string;
  data: {
    token: string;
    data: IUser;
  };
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral: {
    code: string;
  };
  account: {
    type: string;
    role: string;
  };
  archive: boolean;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  __v: number;
}
