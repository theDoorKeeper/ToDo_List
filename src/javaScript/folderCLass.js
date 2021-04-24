import { ID } from './uniqueID';

class folder {
  constructor(name) {
    this.name = name;
    this.id = ID();
    this.content = [];
  }
}

export { folder };
