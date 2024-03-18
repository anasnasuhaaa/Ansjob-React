import { WindowIcon } from "@heroicons/react/24/outline";
import { NavbarComponent } from "../components/Navbar";
import Cookies from "js-cookie";
import { NavbarAuth } from "../components/NavbarAuth";

export default function About() {
  return (
    <>
      {!Cookies.get("token") ? <NavbarComponent /> : <NavbarAuth />}
      <div className="md:p-8 p-5">
        <h1 className="text-4xl font-medium">About</h1>
        <hr />
        <h1>
          AnsJob merupakan karya Final Project Anas Nasuha, salah satu peserta
          Bootcamp ReactJs Sanbercode, terdapat 3 level yang diberikan untuk
          Final Project, yaitu lavel mudah, menegah & sulit, AnsJob termasuk ke dalam Level Sulit.
        </h1>
      </div>
    </>
  );
}
