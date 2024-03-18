import React, { useContext } from "react";
import {
  Navbar,
  Button,
  NavbarProps,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 ${
        window.scrollTo({ top: 0 }) ? "bg-black" : ""
      } lg:flex-row lg:items-center lg:gap-4`}
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center  hover:text-black  hover:font-bold transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/about"
          className="flex items-center hover:text-black  hover:font-bold transition-colors"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/job-vacancy"
          className="flex items-center hover:text-black  hover:font-bold transition-colors"
        >
          Job Vacancy
        </Link>
      </Typography>
      <Link to={"/login"}>
        <Button size="sm" className="w-full">
          Log In
        </Button>
      </Link>
      <Link to={"/register"}>
        <Button variant="outlined" className="w-full" size="sm">
          Sign Up
        </Button>
      </Link>
    </ul>
  );
}

export function NavbarComponent() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      fullWidth
      className= "sticky top-0 z-20  md:px-8 px-5 mx-auto py-3"
    >
      <div className="flex items-center justify-between text-black">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer font-sans text-xl font-bold py-1.5"
        >
          <i className="fa-solid fa-briefcase mr-2"></i>
          AnsJob
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
