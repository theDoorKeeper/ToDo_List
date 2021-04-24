import { ID } from "./uniqueID";

class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.check = false;
    this.id = ID();
  }
}

export { Task };
