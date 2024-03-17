import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const GlobalContext = createContext();

export function GlobalProvider(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [dataDetail, setDataDetail] = useState();
  const [currentId, setCurrentId] = useState(-1);
  let token = Cookies.get("token");
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
    name: "",
    image_url: "",
  });

  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  // Login
  const hanldeInputLogin = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setInputLogin({ ...inputLogin, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let { email, password } = inputLogin;
    console.log(inputLogin);
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email,
        password,
      })
      .then((res) => {
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/");
      })
      .catch((error) => console.log("Error:", error));
    // End Login
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let { email, password, name, image_url } = inputLogin;
    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        email,
        password,
        name,
        image_url,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
      });
  }, [fetchStatus, setFetchStatus]);

  const handleDetail = (event) => {
    setDataDetail(event);
    navigate(`/job-vacancy/${event.id}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleReset = () => {
    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };
  const handleEdit = (e) => {
    let idData = e.currentTarget.value;
    console.log(idData);
    setCurrentId(idData);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
      .then((res) => {
        let data = res.data;
        console.log(data);
        navigate(`/list-job-vacancy/edit/${idData}`);
        setInput({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let {
    //   title,
    //   job_description,
    //   job_qualification,
    //   job_type,
    //   job_tenure,
    //   job_status,
    //   company_name,
    //   company_image_url,
    //   company_city,
    //   salary_min,
    //   salary_max,
    // } = input;

    try {
      if (currentId === -1) {
        const res = await axios.post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          // {
          //   title,
          //   job_description,
          //   job_qualification,
          //   job_type,
          //   job_tenure,
          //   job_status,
          //   company_name,
          //   company_image_url,
          //   company_city,
          //   salary_min,
          //   salary_max,
          // }
          input,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          // {
          //   title,
          //   job_description,
          //   job_qualification,
          //   job_type,
          //   job_tenure,
          //   job_status,
          //   company_name,
          //   company_image_url,
          //   company_city,
          //   salary_min,
          //   salary_max,
          // }
          input,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      setCurrentId(-1);
      setInput({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: "",
      });

      setFetchStatus(true);
    }catch(err) {
      console.log("Error on submit", err.message);
    }
  };

  let isState = { data, fetchStatus, dataDetail, input, inputLogin };
  let isFunction = {
    handleDetail,
    setDataDetail,
    navigate,
    rupiah,
    setInput,
    handleInput,
    handleInput,
    handleEdit,
    handleSubmit,
    handleReset,
    hanldeInputLogin,
    handleLogin,
    handleRegister,
  };

  return (
    <GlobalContext.Provider
      value={{
        isState,
        isFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
