import { User } from '../models/UserModel';

test('it should be ok', () => {
  const user = new User();
  user.name = 'David';
  expect(user.name).toEqual('David');
});
