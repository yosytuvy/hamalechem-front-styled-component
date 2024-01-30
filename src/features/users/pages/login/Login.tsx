import { useNavigate } from "react-router-dom";
import { Form, FormTitle, Input, SubmitButton } from "./Login.style";
import { useForm } from "react-hook-form";
import { LoginInterface } from "../../interfaces/LoginInterface";
import axios from "axios";
import { ReactNode } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { setUser } from "../../userSlice";

const Login = () => {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data: LoginInterface) => {
        axios
            .post("http://localhost:3000/auth/login", data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem(
                    "HAMALECHEM_TOKEN",
                    response.data.access_token
                );
                dispatch(setUser(response.data.userDetails));
                if (response.data.userDetails.userType === "solider") {
                    navigate("/donations");
                } else {
                    navigate("/requests");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Login</FormTitle>
            <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
            />

            {errors.password && <p>{errors.password.message as ReactNode}</p>}
            <Input
                type="password"
                placeholder="Password"
                {...register("password", {
                    required: true,
                    pattern: {
                        value: passwordRegex,
                        message:
                            "password must be at least 8 characters, one upper letter, one lower letter and number",
                    },
                })}
            />

            <SubmitButton type="submit">Login</SubmitButton>
        </Form>
    );
};

export default Login;
