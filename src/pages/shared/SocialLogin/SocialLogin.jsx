import { useContext } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";
import swal from "sweetalert";

function SocialLogin() {
  const { googleLogin } = useContext(AuthContext);

  const handleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        swal({
          title: "Login Success!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Login Failed!",
          text: "Something went wrong! Try Later.",
          icon: "warning",
        });
      });
  };

  return (
    <fieldset className="border-2 border-gray-200 p-4 rounded-sm">
      <legend className="text-center">Continue with</legend>
      <div
        onClick={handleLogin}
        className="w-full text-center border-2 border-green-300 py-3 font-xl rounded-md hover:rounded-full cursor-pointer bg-green-800 text-white"
      >
        Google
      </div>
    </fieldset>
  );
}

export default SocialLogin;
