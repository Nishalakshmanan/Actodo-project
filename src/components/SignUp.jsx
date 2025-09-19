import { use, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function SignUp(props) {
  const users = props.users;
  const setusers = props.setusers;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [cpass_match, setcpass_match] = useState(true);
  const navigate=useNavigate()
  function handleUsername(evt) {
    setusername(evt.target.value);
  }
  function handlePassword(evt) {
    setpassword(evt.target.value);
  }
  function handleCpassword(evt) {
    setcpassword(evt.target.value);
  }
  function addUser() {
    if (password === cpassword) {
      setcpass_match(true);
      console.log("you can login now");
      setusers([...users, { u_name: username, u_pass: password }]);
      navigate("/")
      
    } else {
      setcpass_match(false);
    }
  }
  return (
    <div className="bg-black p-4 vs:p-7 sm:p-11 flex justify-center items-center h-screen">
      <div className="bg-[#EFEFEF] w-full min-w-[260px] max-w-[86%] p-4 xs:p-7 sm:p-10 rounded-md">
        <h1 className="text-2xl font-semibold">Hey Hi 👋</h1>
        <p>You can Signup here :)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            value={username}
            onInput={handleUsername}
            type="text"
            placeholder="username"
            className=" w-48 border border-black rounded-md p-1.5"
          />
          <input
            value={password}
            onInput={handlePassword}
            type="password"
            placeholder="password"
            className="w-48 border border-black rounded-md p-1.5"
          />
          <input
            value={cpassword}
            onInput={handleCpassword}
            type="password"
            placeholder="confirm password"
            className="w-48 border border-black rounded-md p-1.5"
          />
          {cpass_match ? (
            ""
          ) : (
            <p className="text-red-700">*Password did not match</p>
          )}
        </div>
        <button
          className="py-1 px-4 bg-[#FCA201] rounded-md mb-2"
          onClick={addUser}
        >
          Sign Up
        </button>
        <p>
          Already have an account ?{" "}
          <Link to={"/"} className="underline underline-offset-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
