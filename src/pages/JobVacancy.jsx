import CardComponent from "../components/Card";
import { Footer } from "../components/Footer";
import { SearchForm } from "../components/Form";
import { NavbarComponent } from "../components/Navbar";
import { NavbarAuth } from "../components/NavbarAuth";
import Layout from "../layout/Layout";
import Cookies from "js-cookie";

export default function JobVacancy() {
  return (
    <>
      {!Cookies.get("token") && <NavbarComponent />}
      {Cookies.get("token") && <NavbarAuth />}
      <SearchForm/>
      <Layout>
        <CardComponent />
      </Layout>
      <Footer />
    </>
  );
}
