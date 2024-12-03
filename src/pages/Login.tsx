import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Login = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2 className="text-center mb-2">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="Email address" />
        <Input placeholder="Password" />

        <Button className="bg-indigo-800 hover:bg-indigo-500" width={"w-full"}>
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
