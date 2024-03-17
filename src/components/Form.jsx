import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

export function RegisterForm() {
  const {isFunction, isState} = useContext(GlobalContext)
  return (
    <Card
      color="transparent"
      className="grid place-items-center"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  shadow-xl p-5">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="name"
            onChange={isFunction.hanldeInputLogin}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Image URL
          </Typography>
          <Input
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="image_url"
            onChange={isFunction.hanldeInputLogin}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="email"
            onChange={isFunction.hanldeInputLogin}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="password"
            onChange={isFunction.hanldeInputLogin}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth onClick={isFunction.handleRegister}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export function LoginForm() {
  const {isState, isFunction} = useContext(GlobalContext)

  return (
    <Card
      color="transparent"
      className="grid place-items-center"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 shadow-xl p-5">
        <div className="mb-1 flex  flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name="email"
            value={isState.inputLogin.email}
            onChange={isFunction.hanldeInputLogin}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            name="password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={isState.inputLogin.password}
            onChange={isFunction.hanldeInputLogin}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              required
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          required
        />
        <Button
          onClick={isFunction.handleLogin}
          className="mt-6"
          fullWidth
        >
          login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link to={"/register"} className="font-medium text-gray-900">
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export function AddNewJobForm() {
  const { isState, isFunction } = useContext(GlobalContext);

  return (
    <Card
      color="transparent"
      className="grid place-items-center w-full"
      shadow={false}
    >
      <form onSubmit={isFunction.handleSubmit} className="mt-5 mb-2 max-w-screen-xl w-full p-4 shadow-xl">
        <div className="mb-1 flex flex-col gap-2">
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-sm font-medium"
          >
            Job Title
          </Typography>
          <Input
            size="lg"
            name="title"
            value={isState.input.title}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={isFunction.handleInput}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-sm font-medium"
          >
            Job Description
          </Typography>
          <Input
            size="lg"
            name="job_description"
            value={isState.input.job_description}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={isFunction.handleInput}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-sm font-medium"
          >
            Job Qualification
          </Typography>
          <Input
            size="lg"
            name="job_qualification"
            value={isState.input.job_qualification}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={isFunction.handleInput}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Job Type
              </Typography>
              <Input
                size="lg"
                name="job_type"
                value={isState.input.job_type}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Job Tenure
              </Typography>
              <Input
                size="lg"
                name="job_tenure"
                value={isState.input.job_tenure}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Job Status
              </Typography>
              <Input
                size="lg"
                type="number"
                min={0}
                max={1}
                name="job_status"
                value={isState.input.job_status}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Company Name
              </Typography>
              <Input
                size="lg"
                name="company_name"
                value={isState.input.company_name}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Company Image URL
              </Typography>
              <Input
                size="lg"
                name="company_image_url"
                value={isState.input.company_image_url}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Company City
              </Typography>
              <Input
                size="lg"
                name="company_city"
                value={isState.input.company_city}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Min Salary
              </Typography>
              <Input
                size="lg"
                type="number"
                name="salary_min"
                value={isState.input.salary_min}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-medium"
              >
                Max Salary
              </Typography>
              <Input
                size="lg"
                type="number"
                name="salary_max"
                value={isState.input.salary_max}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={isFunction.handleInput}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required
              />
            </div>
          </div>
        </div>
        <Button onClick={isFunction.handleSubmit} className="w-full mt-3">Submit</Button>
        <Button onClick={isFunction.handleReset} variant="outlined" className="w-full mt-2">Reset</Button>
      </form>
    </Card>
  );
}
