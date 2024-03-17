import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function TableListJob() {
  const {isState, isFunction } = useContext(GlobalContext);
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Logo</Table.HeadCell>
          <Table.HeadCell>City</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Tenure</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Salary</Table.HeadCell>
          <Table.HeadCell className="text-center">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isState.data.map((res, i) => {
            return (
              <Table.Row
                key={i}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {++i}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {res.title}
                </Table.Cell>
                <Table.Cell>{res.company_name}</Table.Cell>
                <Table.Cell className="w-3">
                  <img
                    src={res.company_image_url}
                    className="rounded-full"
                    alt="company logo"
                  />
                </Table.Cell>
                <Table.Cell> {res.company_city}</Table.Cell>
                <Table.Cell> {res.job_type}</Table.Cell>
                <Table.Cell> {res.job_tenure}</Table.Cell>
                <Table.Cell>
                  {" "}
                  {res.job_status === 1 ? "Open" : "Close"}
                </Table.Cell>
                <Table.Cell>
                  {isFunction.rupiah(res.salary_min)}-{isFunction.rupiah(res.salary_max)}
                </Table.Cell>
                <Table.Cell className="gap-2 flex flex-col justify-center items-center">
                  <Button onClick={isFunction.handleEdit} value={res.id} size="sm" className="px-6" variant="gradient">
                    Edit
                  </Button>
                  <Button size="sm" color="red" variant="filled">
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
