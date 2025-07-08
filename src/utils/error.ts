export class CustomError extends Error {
  public status;

  constructor( { status, name, message }: { status: number, name: string, message: string} ) {
    super();
    this.status = status;
    this.name = name;
    this.message = message;
  }

  getStatus = () => this.status;
}