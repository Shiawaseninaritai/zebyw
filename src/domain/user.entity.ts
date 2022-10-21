import crypto from 'crypto';
import { expression } from '../utils/RegexEmail';

export type UserProps = {
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
};

export class User {
  public readonly id: string;
  public props: Required<UserProps>;
  constructor(props: UserProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = props;
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
    return {
      id: this.id,
      ...this.props
    };
  }
}
