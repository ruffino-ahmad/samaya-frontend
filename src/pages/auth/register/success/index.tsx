import AuthLayout from "@/components/layouts/AuthLayout";
import { RegisterSuccess } from "@/features/auth";

const RegisterSuccessPage = () => {
  return (
    <AuthLayout title="Samaya | Registration Success">
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
