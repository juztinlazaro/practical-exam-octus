export class Contacts {
  email: string;
  name: string;
  phone: number;
  image: string;

  constructor(email: string, name: string, phone: number, image: string) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.image = image;
  }
}
