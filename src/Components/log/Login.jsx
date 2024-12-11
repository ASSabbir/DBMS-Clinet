import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/MainContex";
import Swal from "sweetalert2";


const Login = () => {
  const { handelSignin, googleSign } = useContext(AuthContext)
  const navg = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    if (email === '' || password === '') {
      Toast.fire({
        icon: "error",
        title: 'All fields must be filled out.'
      });
      return
    }
    handelSignin(email, password)
      .then(user => {

        Toast.fire({
          icon: "success",
          title: `WelCome ${user.user.displayName} `
        });
        navg(location.state ? location.state : '/')

      })
      .catch(error => {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: error.code
        });
      })

  }
  const handelgoogle = () => {
    googleSign()
      .then((user) => {
        Toast.fire({
          icon: "success",
          title: `WelCome ${user.user.displayName} `
        });
        navg(location.state ? location.state : '/')

      })
      .catch(error => {
        Toast.fire({
          icon: "error",
          title: error.code
        });
      })
  }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handelSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-pribg-primary focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-pribg-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-pribg-primary-light"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to={'/register'}>
                SignUp
            </Link>
        </p>
        <button onClick={handelgoogle} aria-label="Login with Google" type="button" className="flex mt-5 items-center justify-center w-full p-2 space-x-4 border-[2px] border-primary ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
    </div>
    );
};

export default Login;