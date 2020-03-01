export class Contacts {
  email: string;
  name: string;
  phone: string;
  image: string;

  constructor(email: string, name: string, phone: string, image: string) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.image = image;
  }
}
