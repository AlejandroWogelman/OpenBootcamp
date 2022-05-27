export class ContactModel {
  name = "";
  surname = "";
  email = "";
  online = false;

  constructor(name, surname, email, online) {
    return (
      (this.name = name),
      (this.surname = surname),
      (this.email = email),
      (this.online = online)
    );
  }
  change() {
    this.online = !this.online;
  }
}
