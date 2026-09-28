import AuthLayout from "@/components/layouts/AuthLayout";
import { Login } from "@/features/auth";

const RegisterPage = () => {
  return (
    <AuthLayout title="Samaya | Login">
      <Login />
    </AuthLayout>
  );
};

export default RegisterPage;
