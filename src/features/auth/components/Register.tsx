import { Button, Card, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import FloatingPasswordField from "@/components/commons/FloatingPasswordField";
import FloatingTextField from "@/components/commons/FloatingTextField";
import useRegister from "../hooks/useRegister";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();
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
            Create Account
          </h2>
          <p className="text-small mb-4">
            Have an account?&nbsp;
            <Link
              href="/auth/login"
              className="text-danger font-semibold-400 font-bold"
            >
              Login Here
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
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => (
                <FloatingTextField
                  {...field}
                  id="fullname"
                  label="FullName"
                  isInvalid={errors.fullname !== undefined}
                  errorMessage={errors.fullname?.message}
                />
              )}
            ></Controller>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <FloatingTextField
                  {...field}
                  id="username"
                  label="Username"
                  isInvalid={errors.username !== undefined}
                  errorMessage={errors.username?.message}
                />
              )}
            ></Controller>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FloatingTextField
                  {...field}
                  id="email"
                  type="email"
                  label="Email"
                  isInvalid={errors.email !== undefined}
                  errorMessage={errors.email?.message}
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
                  visible={visiblePassword.password}
                  onToggle={() => handleVisiblePassword("password")}
                />
              )}
            ></Controller>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <FloatingPasswordField
                  {...field}
                  id="confirmPassword"
                  label="Password Confirmation"
                  isInvalid={errors.confirmPassword !== undefined}
                  errorMessage={errors.confirmPassword?.message}
                  visible={visiblePassword.passwordConfirmation}
                  onToggle={() => handleVisiblePassword("passwordConfirmation")}
                />
              )}
            ></Controller>
            <Button variant="danger" type="submit" fullWidth>
              {isPendingRegister ? <Spinner color="accent" /> : "Register"}
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Register;
