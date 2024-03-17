import { useContext } from "react";
import { NavbarAuth } from "../components/NavbarAuth";
import { Sidebar } from "../components/Sidebar";
import GlobalContext from "../context/GlobalContext";

export default function Dashboard() {
  const {isState} = useContext(GlobalContext)
  console.log(isState.identity);
  return (
    <>
      <NavbarAuth />
      <div className="flex">
        <Sidebar/>
        <div className="w-full ml-[13rem]">
          <h1 className="font-black text-6xl text-center">WELCOME</h1>
          <h1>{isState.identity.name}</h1>
        </div>
      </div>
    </>
  );
}
