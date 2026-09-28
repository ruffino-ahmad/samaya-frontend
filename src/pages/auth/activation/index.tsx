import AuthLayout from "@/components/layouts/AuthLayout";
import { Activation } from "@/features/auth";
import authService from "@/services/auth.service";

interface PropTypes {
  status: "success" | "failed";
}

const ActivationPage = (props: PropTypes) => {
  console.log(props);
  return (
    <AuthLayout title="Samaya | Activation">
      <Activation {...props} />
    </AuthLayout>
  );
};

export async function getServerSideProps(context: {
  query: { activationCode: string };
}) {
  try {
    const result = await authService.activation({
      activationCode: context.query.activationCode,
    });
    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    } else {
      return {
        props: {
          status: "failed",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        status: "failed",
      },
    };
  }
}

export default ActivationPage;
