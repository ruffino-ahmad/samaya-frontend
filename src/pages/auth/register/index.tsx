import AuthLayout from "@/components/layouts/AuthLayout";
import { Register } from "@/features/auth";

const RegisterPage = () => {
  return (
    <AuthLayout title="Samaya | Register">
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
