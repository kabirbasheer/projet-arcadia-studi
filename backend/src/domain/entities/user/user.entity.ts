import { UserInterface } from "./user.entity.interface";

export class User implements UserInterface {
  constructor(
    public id: string,
    public username: string,
    public lastname: string,
    public firstname: string,
    public password: string,
    public admin: boolean,
    public isActive: boolean,
    public createdAt: Date,
    public updatedAt: Date,
    public lastLogin: Date,
  ) {}
}
