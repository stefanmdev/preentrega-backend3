import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export function generateUsersMock(count = 1) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName  = faker.person.lastName();
    const email     = faker.internet.email({ firstName, lastName });
    const plainPwd  = 'coder123';
    const password  = bcrypt.hashSync(plainPwd, 10);
    const role      = i % 2 === 0 ? 'user' : 'admin';
    users.push({
      _id:      faker.database.mongodbObjectId(),
      firstName,
      lastName,
      email,
      password,
      role,
      pets: []
    });
  }
  return users;
}

export function generatePetsMock(count = 1) {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push({
      id:       faker.string.uuid(),
      name:     faker.animal.cat(),        
      species:  faker.animal.type(),
      birthday: faker.date.birthdate({ min: 1, max: 15, mode: 'age' })
    });
  }
  return pets;
}
