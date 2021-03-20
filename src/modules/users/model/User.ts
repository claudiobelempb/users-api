import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at?: Date;

  constructor(
    name: string,
    admin: boolean,
    email: string,
    created_at: Date,
    updated_at: Date
  ) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.admin = admin;
    this.email = email;
    this.created_at = created_at;
    if (updated_at) this.updated_at = updated_at;
  }
}

export { User };
