import { Button, Card, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import FloatingPasswordField from "@/components/commons/FloatingPasswordField";
import FloatingTextField from "@/components/commons/FloatingTextField";
import useLogin from "../hooks/useLogin";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Login = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  } = useLogin();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/general/logo.png"
          alt="Logo"
          width={180}
          height={180}
          loading={`eager`}
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          src="/images/illustrations/login.svg"
          alt="Logo"
          width={1024}
          height={1024}
          loading="eager"
          className="w-2/3 lg:w-full"
          style={{ height: "auto" }}
        />
      </div>
      <Card className="border border-gray-200/80 shadow-lg dark:border-gray-700/50">
        <Card.Content className="p-8">
          <h2 className="text-danger-500 text-danger font-semibold-400 text-xl font-bold">
            Login
          </h2>
          <p className="text-small mb-4">
            Don{"'"}t have an account?&nbsp;
            <Link
              href="/auth/register"
              className="text-danger font-semibold-400 font-bold"
            >
              Register Here
            </Link>
          </p>
          {errors.root && (
            <p className="text-danger text-sm">{errors?.root?.message}</p>
          )}
          <form
            className={cn(
              "flex w-80 flex-col",
              Object.keys(errors).length > 0 ? "gap-2" : "gap-4",
            )}
            onSubmit={handleSubmit(handleLogin)}
          >
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <FloatingTextField
                  {...field}
                  id="identifier"
                  label="Email / Username"
                  isInvalid={errors.identifier !== undefined}
                  errorMessage={errors.identifier?.message}
                />
              )}
            ></Controller>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FloatingPasswordField
                  {...field}
                  id="password"
                  label="Password"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  visible={visiblePassword}
                  onToggle={() => handleVisiblePassword()}
                />
              )}
            ></Controller>
            <Button variant="danger" type="submit" fullWidth>
              {isPendingLogin ? <Spinner color="accent" /> : "Login"}
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Login;
