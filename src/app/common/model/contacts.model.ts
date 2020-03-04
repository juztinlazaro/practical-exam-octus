export class Contacts {
  id: string;
  email: string;
  name: string;
  phone: number;
  image: string;

  constructor(
    id: string,
    email: string,
    name: string,
    phone: number,
    image: string
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.image = image;
  }
}
