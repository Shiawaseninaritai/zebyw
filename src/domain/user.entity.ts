import { expression } from '../utils/RegexEmail';

export type UserProps = {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
};

export class User {
  public props: Required<UserProps>;
  constructor(props: UserProps) {
    this.props = {
      ...props,
      id: props.id || ''
    };
  }

  updateName(value: string) {
    this.name = value;
  }

  updateEmail(value: string): boolean {
    const result: boolean = expression.test(value);
    if (result) {
      this.email = value;
      return true;
    }
    return false;
  }

  updatePassword(value: string) {
    this.password = value;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get name(): string {
    return this.props.name;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  get email(): string {
    return this.props.email;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get password(): string {
    return this.props.password;
  }

  toJSON() {
    return this.props;
  }
}
