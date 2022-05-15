import Home from "../pages/Home";
import About from "../pages/About";
import { MakeGenerics } from "@tanstack/react-location";
import { Customer } from "types";
import type { RouterProps } from "@tanstack/react-location";

const getCustomers = async () => {
  const data = await fetch("http://localhost:5000/customers");
  return data.json();
};

export const routes = [
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return {
        customers: await getCustomers(),
      };
    },
  },
  { path: "about", element: <About /> },
];
