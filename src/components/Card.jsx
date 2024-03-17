import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function CardComponent() {
  const { isState, isFunction } = useContext(GlobalContext);


  return isState.data.map((res, i) => (
    <Card key={i} className=" flex-col md:flex-row  max-w-[36rem] mt-3">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 mx-auto object-cover  flex justify-center items-center shrink-0 rounded-r-none"
      >
        <img
          src={res.company_image_url}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-5">
        <Typography variant="h6" color="gray" className="mb-1  uppercase">
          {res.company_name}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {res.title}
        </Typography>
        <Typography
          color="gray"
          className="mb-8 font-normal min-h-20 max-h-20 overflow-hidden"
        >
          {res.job_description}
        </Typography>

        <Button
        key={res.id}
          variant="text"
          className="flex bg-black text-white hover:bg-gray-800 items-center gap-2"
          onClick={() => isFunction.handleDetail(res)}
        >
          See Detail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardBody>
    </Card>
  ));
}
