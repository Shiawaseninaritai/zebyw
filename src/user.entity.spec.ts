import { User, UserProps } from './user.entity';

describe('User Tests', () => {
  test('constructor', () => {
    const email = 'email@gmail.com';
    let userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email,
      name: 'test',
      password: '81237489123jasdhfajksf'
    };
    let user = new User(userProps);
    expect(user.props).toStrictEqual({
      ...userProps,
      id: ''
    });
    expect(user.props.email).toStrictEqual(email);

    userProps = {
      id: '1',
      age: 19,
      categories: ['happy', 'animais'],
      email,
      name: 'test2',
      password: '81237489123jasdhfajksasdfasfdsaf'
    };
    user = new User(userProps);
    expect(user.props).toStrictEqual({
      ...userProps
    });
  });
});
