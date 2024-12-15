import { UserInterface } from '@/domain/entities/user/user.entity.interface';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<UserInterface>({
  name: 'user',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    username: {
      type: 'varchar',
      length: '255',
      unique: true,
      nullable: false,
    },
    lastname: {
      type: 'varchar',
      length: '255',
    },
    firstname: {
      type: 'varchar',
      length: '255',
    },
    password: {
      type: 'varchar',
      length: '255',
      nullable: false,
    },
    admin: {
      type: 'boolean',
      nullable: false,
    },
    isActive: {
      type: 'boolean',
      default: true,
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp with time zone',
      createDate: true,
    },
    updatedAt: {
      name: 'updated_at',
      type: 'timestamp with time zone',
      updateDate: true,
    },
    lastLogin: {
      name: 'last_login',
      type: 'timestamp with time zone',
      updateDate: true,
    },
  },
});