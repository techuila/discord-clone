import { useState, Suspense, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Spinner from "../../components/ui/spinner/spinner";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60,
          },
        },
      }),
  );

  return (
    <Suspense fallback={<Spinner />}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </HelmetProvider>
    </Suspense>
  );
};
