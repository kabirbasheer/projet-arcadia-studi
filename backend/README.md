Backend - Arcadia

Ce projet contient le backend pour l'application Arcadia. Il utilise TypeORM pour l'accès aux données et PostgreSQL comme base de données.

Prérequis

Avant de commencer, assurez-vous que vous avez les outils suivants installés sur votre machine :

- Node.js (version 16 ou supérieure)
- npm
- Docker (pour exécuter PostgreSQL dans un conteneur, si nécessaire)
- TypeORM (inclus dans le projet)

Installation

1. Clonez le repository :
   git clone https://github.com/votre-utilisateur/arcadia.git
   cd arcadia/backend

2. Installez les dépendances :
   npm install

3. Configurez votre base de données PostgreSQL. Si vous utilisez Docker, vous pouvez lancer un conteneur PostgreSQL en utilisant le fichier docker-compose.yml fourni.
   docker-compose up -d

4. Créez un fichier `.env` dans le répertoire racine pour configurer les variables d'environnement, telles que les informations de connexion à la base de données :
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=arcadia
   DB_PASSWORD=password
   DB_NAME=db-arcadia

Utilisation des migrations

Les migrations sont gérées avec TypeORM. Voici comment les utiliser pour appliquer des changements à votre base de données.

1. Générer une migration

Lorsque vous effectuez des changements dans vos entités (par exemple, ajouter une colonne ou une table), vous pouvez générer une migration pour mettre à jour la base de données.

Voici comment générer une migration à partir du code source :

   npx tsx ./node_modules/typeorm/cli.js migration:generate -d src/infrastructure/database/typeorm.config.ts src/infrastructure/database/migrations/GeneratedMigrationName

Remplacez `GeneratedMigrationName` par un nom de migration significatif, par exemple `CreateUserTable`.

Cela générera un fichier de migration dans le dossier `src/infrastructure/database/migrations/`.

2. Appliquer une migration

Pour appliquer toutes les migrations qui n'ont pas encore été exécutées dans la base de données, utilisez la commande suivante :

   npx tsx ./node_modules/typeorm/cli.js migration:run -d src/infrastructure/database/typeorm.config.ts

Cela exécutera les migrations et mettra à jour votre base de données en fonction des changements définis dans les fichiers de migration.

3. Annuler une migration

Si vous souhaitez annuler une migration et revenir en arrière, vous pouvez utiliser la commande suivante :

   npx tsx ./node_modules/typeorm/cli.js migration:revert -d src/infrastructure/database/typeorm.config.ts

Cela exécutera la méthode `down` de la dernière migration appliquée et annulera les modifications apportées à la base de données.

4. Vérifier l'état des migrations

Si vous voulez vérifier si toutes les migrations sont appliquées et à jour, vous pouvez utiliser la commande suivante :

   npx tsx ./node_modules/typeorm/cli.js migration:show -d src/infrastructure/database/typeorm.config.ts

Cela affichera l'état actuel des migrations, en indiquant si elles ont été appliquées ou non.

Exemple de migration pour créer la table "user"

Voici un exemple de migration pour créer une table `user` :

```typescript
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedUserTable1734276994469 implements MigrationInterface {
    name = 'CreatedUserTable1734276994469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Création de la table "user" avec ses colonnes et contraintes
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL, 
                "username" character varying(255) NOT NULL, 
                "lastname" character varying(255) NOT NULL, 
                "firstname" character varying(255) NOT NULL, 
                "password" character varying(255) NOT NULL, 
                "admin" boolean NOT NULL, 
                "isActive" boolean NOT NULL DEFAULT true, 
                "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
                "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
                "last_login" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
                CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), 
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Suppression de la table "user"
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }
}
