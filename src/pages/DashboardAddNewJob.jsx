import { AddNewJobForm } from "../components/Form";
import { NavbarAuth } from "../components/NavbarAuth";
import { Sidebar } from "../components/Sidebar";

export default function DashboardAddNewJob() {
  return (
    <>
      <NavbarAuth />
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-[13rem]">
          <h1 className="text-center text-xl font-bold mt-1">Create & Update Data</h1>
          <AddNewJobForm />
        </div>
      </div>
    </>
  );
}
