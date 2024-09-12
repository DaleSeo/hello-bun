import { email, phone } from "./data/contact.json";

export function Footer() {
  return (
    <footer>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Phone</dt>
      <dd>{phone}</dd>
    </footer>
  );
}
