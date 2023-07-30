import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: true,
//       refetchOnmount: true,
//       refetchOnReconnect: true,
//       retry: true,
//       staleTime: twentyFourHoursInMs,
//     },
//   },
// }
//   {
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnmount: false,
//       refetchOnReconnect: false,
//       retry: false,
//       staleTime: twentyFourHoursInMs,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MenuContextProvider> */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
    {/* </MenuContextProvider> */}
  </React.StrictMode>
);
