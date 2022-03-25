interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
    // [key: string] is how we say that we don't know what the property name is, but we know it's a string
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

  /** Registers an event handler with this object, so other parts of the app know when something changes */
  on(eventName: string, callback: Callback): void {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  /** triggers an event to tell other parts of the app that something has changed */
  trigger() {}
}
