import { useContext } from "react";
import { NavbarAuth } from "../components/NavbarAuth";
import { ProfileCard } from "../components/Profile";
import { Sidebar } from "../components/Sidebar";
import GlobalContext from "../context/GlobalContext";

export default function DashboardProfile() {
    const {isState} = useContext(GlobalContext)
  return (
    <>
      <NavbarAuth />
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-[13rem]">
          <ProfileCard />
        </div>
      </div>
    </>
  );
}
