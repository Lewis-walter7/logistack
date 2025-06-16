export enum UserRole {
  ADMIN = 'admin',
  DRIVER = 'driver',
  CLIENT = 'client',
}

export class User {
  id: string;
  email: string;
  password: string;
  role: UserRole;
}
