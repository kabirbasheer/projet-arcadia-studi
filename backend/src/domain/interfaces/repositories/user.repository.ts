import { User } from "@/domain/entities/user/user.entity";

export interface IUserRepository {
  createUser(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  // Ajouter d'autres méthodes selon les besoins
}
