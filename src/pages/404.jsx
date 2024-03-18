import { Button } from "@material-tailwind/react";
import { KeyIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


export default function NotFound() {
    const {isFunction} = useContext(GlobalContext)
  return (
    <div className="h-dvh flex flex-col gap-3 justify-center items-center ">
      <h1 className="font-black text-9xl">404</h1>
      <h1 className="font-bold text-3xl">Page Not Found 😥</h1>
      <Button className="flex justify-center items-center gap-3" onClick={()=> isFunction.navigate("/")}>
        <ArrowLeftIcon className="w-5" />
        <span>BACK</span>
      </Button>
    </div>
  );
}
