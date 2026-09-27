import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main
        className={cn(
          inter.className,
          "lg:py flex min-h-screen flex-col items-center justify-center gap-10 py-10",
        )}
      >
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
