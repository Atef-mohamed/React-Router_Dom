import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import TextArea from "../components/ui/TextArea";

const Contribute = () => {
  const {state} = useLocation();
  console.log(state.email);
  return (
    <div>
      <h1 className="text-center mb-3 text-2xl">Email: {state.email}</h1>
      <h2 className="text-center mb-3">Issue: Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <TextArea />

        <Button className="bg-indigo-800 hover:bg-indigo-500" width={"w-full"}>
          Submit new issue
        </Button>
      </form>
    </div>
  );
};

export default Contribute;
