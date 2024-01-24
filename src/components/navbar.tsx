import Logo from "./logo";
import SearchBar from "./search";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full h-20 p-2">
      <div className="flex items-center justify-between container h-full xl:px-30  mx-auto max-w-5xl">
        <Logo />
        <SearchBar />
        <div>
          <Button className="rounded-full py-1 px-4">Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
