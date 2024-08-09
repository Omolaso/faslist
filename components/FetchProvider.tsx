import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { DataFetcher } from "@/utils/dataFetcher";

export const FetchProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: DataFetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
