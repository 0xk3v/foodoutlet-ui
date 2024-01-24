import { Outlet } from "@/types";
import OutletItem from "./outlet-item";

const OutletWrapper = ({ outlets }: { outlets: Outlet[] }) => {
  return (
    <div className="w-4/5 mx-auto flex items-center justify-center lg:justify-between flex-wrap-reverse">
      {outlets.map((outlet) => (
        <OutletItem key={outlet.id} outlet={outlet} />
      ))}
    </div>
  );
};

export default OutletWrapper;
