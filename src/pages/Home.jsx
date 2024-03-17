import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Layout from "../layout/Layout";
import JobVacancy from "./JobVacancy";
import CardComponent from "../components/Card";
import LandingPage from "../components/LandingPage";
import { NavbarComponent } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavbarAuth } from "../components/NavbarAuth";
import Cookies from "js-cookie";

export default function Home() {
  const { data } = useContext(GlobalContext);

  return (
    <>
      {!Cookies.get("token") && <NavbarComponent />}
      {Cookies.get("token") && <NavbarAuth />}
      <LandingPage />
      <Layout>
        <CardComponent />
      </Layout>
      <Footer />
    </>
  );
}
