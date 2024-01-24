import "./App.css";
import Navbar from "@/components/navbar";
import useFetchOutlets from "./hooks/api/fetch-outlets";
import Loader from "./components/loader";

function App() {
  const { outlets, isLoading } = useFetchOutlets();

  if (outlets) console.log(outlets);

  return (
    <>
      <div className="bg-slate-50">
        <Navbar />

        {isLoading ? <Loader /> : null}
      </div>
    </>
  );
}

export default App;
