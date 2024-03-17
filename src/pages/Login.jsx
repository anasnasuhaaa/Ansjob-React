import { Navbar } from "flowbite-react";
import { LoginForm } from "../components/Form";
import { NavbarComponent } from "../components/Navbar";

export default function Login() {
  return (
    <>
    <NavbarComponent />
    <div className="max-h-dvh">
      <LoginForm />
    </div>
    </>
  );
}
