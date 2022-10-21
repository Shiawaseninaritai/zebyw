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
}
