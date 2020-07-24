type ApiFailure = {
  errorCode: number;
  errorMessage: string;
  [key: string]: string | number;
};

export default ApiFailure;
