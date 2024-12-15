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
