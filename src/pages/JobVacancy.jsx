import CardComponent from "../components/Card";
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import Layout from "../layout/Layout";

export default function JobVacancy() {
  return (
    <>
      <NavbarComponent />
      <Layout>
        <CardComponent />
      </Layout>
      <Footer />
    </>
  );
}
