import { DataSource } from 'typeorm';
import { UserSchema } from './schema/user.schema'; // Assure-toi que ce chemin est correct

export const AppDataSource = new DataSource({
  type: 'postgres', // Type de base de données (PostgreSQL)
  host: 'localhost', // Host de ta base de données, généralement 'localhost' pour les conteneurs Docker en développement
  port: 5432, // Le port exposé pour PostgreSQL dans ton Docker Compose (5432)
  username: process.env.DB_USER || 'arcadia', // Utilise DB_USER si défini, sinon 'arcadia' par défaut
  password: process.env.DB_PASSWORD || 'password', // Utilise DB_PASSWORD si défini, sinon 'password' par défaut
  database: process.env.DB_NAME || 'db-arcadia', // Utilise DB_NAME si défini, sinon 'db-arcadia' par défaut
  synchronize: false, // Assure-toi que ce paramètre est configuré en fonction de ton besoin
  logging: true, // Permet de voir les logs SQL pour le débogage
  entities: [UserSchema], // Les entités que tu utilises
  migrations: ['src/infrastructure/database/migrations/*.ts'], // Le chemin vers tes fichiers de migration
});
