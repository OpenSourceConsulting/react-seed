export type LoginInfo = {
  username: string;
  password: string;
};

export type Auth = {
  accessToken: string;
  memberId: number | null;
  refreshToken: string;
  userId: string;
  userName: string;
};
