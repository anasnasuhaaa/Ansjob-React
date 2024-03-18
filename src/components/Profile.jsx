import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export function ProfileCard() {
  const { isState } = useContext(GlobalContext);

  return (
    <div className="flex justify-center items-center min-h-[90dvh]">
      <Card className=" m-auto">
        <CardHeader floated={false} className="h-960">
          <img
            className="object-cover w-[30rem]"
            src={isState.dataIdentity.image_url}
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {isState.dataIdentity.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {isState.dataIdentity.email}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Typography color="blue-gray" className="font-medium" textGradient>
            ID: {isState.dataIdentity.id}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Ceated at: {isState.dataIdentity.created_at}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
