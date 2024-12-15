export interface UserInterface {
  id: string;
  username: string;
  lastname: string;
  firstname: string;
  password: string;
  admin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
}
