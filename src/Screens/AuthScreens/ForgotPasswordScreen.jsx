import { Button, Form, Input } from "antd";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import auth_bg from "../../assets/auth_bg.jpg";
import fetena_logo from "../../assets/fetena_logo_blue.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPassword } from "../../Redux/features/authActions";
import { useDispatch, useSelector } from "react-redux";

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  });

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit first", formData);
    e.preventDefault();
    dispatch(forgotPassword(formData))
      .then((res) => {
        console.log(res, "response");
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Reset Email Sent!");
        } else {
          // console.log(res.payload.message);
          toast.error(res.payload.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something is wrong!");
      });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${auth_bg})`,
      }}
      className="flex flex-col items-center justify-center h-screen gap-4 bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to={"/"}>
          <img className="w-40" src={fetena_logo} alt="Fetena.com Logo" />
        </Link>
        <h1 className="text-3xl font-bold text-white">Forgot your password?</h1>
      </div>
      <div className="flex flex-col gap-4 ">
        <h2 className="text-md font-semibold text-white">
          Enter your email and we will send you a reset link.
        </h2>
        <Form>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              className="max-w-[300px] min-w-[100px]"
              prefix={<Icon icon="mdi-light:email" />}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
            />
          </Form.Item>
        </Form>
      </div>
      <Button
        onClick={handleSubmit}
        className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 border border-blue-500"
        htmlType="submit"
      >
        {loading ? "Loading..." : "Submit"}
      </Button>
    </div>
  );
};
export default ForgotPasswordScreen;
