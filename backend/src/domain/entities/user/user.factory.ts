import { buildFactory } from '@/configuration/utils/buildFactory';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { UserInterface } from './user.entity.interface';


const buildSchema = (): UserInterface => {
  const password = faker.internet.password();
  const hashedPassword = bcrypt.hashSync(password, 10);

  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    lastname: faker.person.lastName(),
    firstname: faker.person.firstName(),
    password: hashedPassword,
    admin: faker.datatype.boolean(),
    isActive: faker.datatype.boolean(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    lastLogin: faker.date.recent(),
  };
};

export const userFactory = (args?: Partial<UserInterface>): UserInterface => {
  const providedData = {
    ...args,
  };

  if (args?.password) {
    providedData.password = bcrypt.hashSync(args.password, 10);
  }
  return buildFactory<UserInterface>({
    ...buildSchema(),
  })({
    ...providedData,
  });
};
