class MyError extends Error {
  code: number;
  data: object | undefined;

  constructor(message: string, code: string, data?: object) {
    super(message);
    this.code = Number(code);
    this.data = data;
  }
}

export default MyError;