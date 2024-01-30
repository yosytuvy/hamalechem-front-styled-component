import { useForm } from "react-hook-form";
import {
    Form,
    FormTitle,
    Input,
    RadioGroup,
    RadioInput,
    SubmitButton,
} from "./SignUp.style";
import { ReactNode } from "react";
import { SignUpInterface } from "../../interfaces/SignUpInterface";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data: SignUpInterface) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/signup",
                data
            );
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Sign Up</FormTitle>
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

            <Input
                type="text"
                placeholder="Full Name"
                {...register("fullName", {
                    required: true,
                })}
            />

            {errors.type && <p>Please select an option</p>}
            <RadioGroup>
                <label>
                    <RadioInput
                        type="radio"
                        value="solider"
                        {...register("userType", { required: true })}
                    />
                    Solider
                </label>

                <label>
                    <RadioInput
                        type="radio"
                        value="contributor"
                        {...register("userType", { required: true })}
                    />
                    Contributor
                </label>
            </RadioGroup>

            <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
    );
};

export default SignupForm;
