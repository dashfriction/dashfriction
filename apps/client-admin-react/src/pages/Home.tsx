import { MakeGenerics, useMatch } from "@tanstack/react-location";
import { Customer } from "types";

type LocationGenerics = MakeGenerics<{
  LoaderData: {
    customers: Customer[];
  };
}>;

const Home = () => {
  const {
    data: { customers },
  } = useMatch<LocationGenerics>();

  return (
    <div>
      {customers?.map((customer) => (
        <div>{customer.email}</div>
      ))}
    </div>
  );
};

export default Home;
