interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //overwrite the whole object with data from another object:
    Object.assign(this.data, update);
    // this.data.name = update.name || this.data.name;
    // this.data.age = update.age || this.data.age;
  }

  on(eventName: string, callback: Callback) {}

  trigger() {}
}
