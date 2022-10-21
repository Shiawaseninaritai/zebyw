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
    expect(user.props.id).toEqual('1');
  });

  test('method updateName', () => {
    const email = 'email@gmail.com';
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email,
      name: 'test',
      password: '81237489123jasdhfajksf'
    };
    const newName = 'test2';
    const user = new User(userProps);
    user.updateName(newName);
    expect(user.props.name).toEqual(newName);
  });

  test('method updateEmail', () => {
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email: 'email2@gmail.com',
      name: 'test',
      password: '81237489123jasdhfajksf'
    };
    const user = new User(userProps);
    const email = 'email@gmail.com';
    const result = user.updateEmail(email);
    expect(result).toBeTruthy();
    expect(user.props.email).toStrictEqual(email);
  });

  test('method updatePassword', () => {
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email: 'email2@gmail.com',
      name: 'test',
      password: '81237489123jasdhfajksf'
    };
    const newPassword = 'aklsdjfklasjfkasfjkslf';
    const user = new User(userProps);
    user.updatePassword(newPassword);
    expect(user.props.password).toEqual(newPassword);
  });

  test('Test Getter name', () => {
    const name = 'test';
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email: 'email2@gmail.com',
      name,
      password: '81237489123jasdhfajksf'
    };
    const user = new User(userProps);
    expect(user.props.name).toStrictEqual(name);
  });

  test('Test Getter email', () => {
    const email = 'email2@gmail.com';
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email,
      name: 'test',
      password: '81237489123jasdhfajksf'
    };
    const user = new User(userProps);
    expect(user.props.email).toStrictEqual(email);
  });

  test('Test Getter password', () => {
    const password = '81237489123jasdhfajksf';
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email: 'email2@gmail.com',
      name: 'test',
      password
    };
    const user = new User(userProps);
    expect(user.props.password).toStrictEqual(password);
  });
});
