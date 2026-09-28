import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { RegisterFormValues } from "@/features/auth/schemas/register.schema";
import { IActivation } from "@/types/Auth";

const authService = {
  register: (payload: RegisterFormValues) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: IActivation) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
};

export default authService;
