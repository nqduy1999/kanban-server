import { REQUIRED_ERR } from "@/commons/form";
import * as Yup from "yup";

export const passwordValidationSchema = Yup.string().required(REQUIRED_ERR("password"));
export const confirmPasswordValidationSchema = Yup.string().required(REQUIRED_ERR("confirm password"));
export const usernameValidationSchema = Yup.string().required(REQUIRED_ERR("username"));
