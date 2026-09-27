import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { RegisterFormValues } from "@/features/auth/schemas/register.schema";

const authService = {
  register: (payload: RegisterFormValues) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
};

export default authService;
