import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface PropTypes {
  status: "success" | "failed";
}

const Activation = (props: PropTypes) => {
  const router = useRouter();
  const { status } = props;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.png"
          alt="Logo"
          width={180}
          height={180}
          loading="eager"
          className="h-auto w-[180px]"
        />
        <Image
          src={
            status === "success"
              ? "/images/illustrations/success.svg"
              : "/images/illustrations/pending.svg"
          }
          alt={status === "success" ? "Success" : "Failed"}
          width={300}
          height={300}
          loading="eager"
          className="h-auto w-[300px]"
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-danger text-3xl font-bold">
          {status === "success"
            ? "Create Account Success"
            : "Activation Failed"}
        </h1>
        <p className="text-muted text-xl font-bold">
          {status === "success"
            ? "Thank you for register account in Samaya."
            : "Activation code is invalid or has expired."}
        </p>
        <Button
          className="border-danger text-danger hover:bg-danger-50 dark:border-danger dark:text-danger mt-4 w-fit bg-white dark:bg-white"
          variant="outline"
          onPress={() => router.push("/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default Activation;
