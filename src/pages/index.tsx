import PageHead from "@/components/commons/Pagehead";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-center min-h-screen`}>
      <PageHead title="Samaya" />
      <Button onPress={() => console.log("Button pressed")} variant="secondary">
        Click me
      </Button>
    </main>
  );
}
