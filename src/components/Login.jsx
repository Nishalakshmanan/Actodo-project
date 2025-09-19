import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import Landing from './Landing'
function Login(props) {
  const users = props.users;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const[found,setfound]=useState(true)
  const navigate=useNavigate()
  function handleUsername(evt) {
    setusername(evt.target.value);
  }
  function handlePassword(evt) {
    setpassword(evt.target.value);
  }
  function handleLogin() {
    let fnd=false
    users.forEach((user) => {
      if (username === user.u_name && password === user.u_pass) {
        fnd=true
        setfound(true)
        console.log("login successful");
        navigate('/landing',{
          state:{
            name:user.u_name
          }
        })
      }
    });
    if (!fnd) {
      setfound(false)
      console.log("login failed");
    }
  }
  return (
    <div className="bg-black px-1  vs:p-6 sm:p-11 flex justify-center items-center h-screen">
      <div className="bg-[#EFEFEF] w-full min-w-[260px] max-w-[86%] p-3.5 xs:p-6 sm:p-10 rounded-md">
        <h1 className="text-2xl font-semibold">Hey Hi 👋</h1>
        {found?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please Sign Up before you login</p>}
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
        </div>
        <button
          className="py-1 px-4 bg-[#FCA201] rounded-md mb-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <p>
          Don't have an account ?{" "}
          <Link to={"/signup"} className="underline underline-offset-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
