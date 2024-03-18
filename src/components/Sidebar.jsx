import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PencilIcon,
  PowerIcon,
  KeyIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export function Sidebar() {
  const { isFunction } = useContext(GlobalContext);
  return (
    <Card className="h-dvh w-full max-w-[13rem] p-4 top-0 fixed border-r-2 rounded-none z-50">
      <div className="mb-2 p-4">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer font-sans text-xl font-bold py-1.5"
        >
          <i className="fa-solid fa-briefcase mr-2"></i>
          AnsJob
        </Typography>
      </div>
      <List>
        <Link to={"/profile"}>
        <ListItem className="w-[10em]">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        </Link>
        <Link to={"/list-job-vacancy"}>
          <ListItem className="w-[10em]">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Table
          </ListItem>
        </Link>
        <Link to={"/list-job-vacancy/form"}>
          <ListItem className="w-[10em]">
            <ListItemPrefix>
              <FolderPlusIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add New Job
          </ListItem>
        </Link>
        <Link to={"/change-password"}>
          <ListItem className="w-[10em]">
            <ListItemPrefix>
              <KeyIcon className="h-5 w-5" />
            </ListItemPrefix>
            Change Password
          </ListItem>
        </Link>
        <ListItem onClick={isFunction.handleLogout} className="w-[10em]">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
