import { Navigate, NavLink } from "react-router-dom";


import { AuthContext } from "./Providers/MainContex";
import { useContext } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { handelSignup } = useContext(AuthContext);
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
  // Event Handler
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const gender = form.gender.value;
    // const photo = form.photo.value;
    const role = form.role.value;
    const password = form.password.value;

    const newUser = { name, email, number, gender, role, password };
    console.log(newUser);

    // Create Person in FireBase
    handelSignup(email, password)
      .then((result) => {
        Navigate("/");
        console.log(result);
        Toast.fire({
          icon: "success",
          title: `WelCome ${result.user.displayName} `
        });
      })
      .catch((error) => {
        console.error(error);
        
      });

    // Send Data to the Server
    await fetch("http://localhost:5000/user_info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((req) => req.json())
      .then((data) => {
        form.reset();
        console.log(data);
      });
  };
  const handelgoogle = () => {
    Toast.fire({
      icon: "success",
      title: `WelCome  `
    });
  }

  return (
    <div>

      <section className="flex justify-center p-5">
        <div className="border w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register Now</h1>
          <form
            onSubmit={handleRegister}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Noman"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="noman@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="phone_number"
                placeholder="Phone Number"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <select name="gender" required className="select select-bordered w-full">
                <option disabled selected>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <select name="role" className="select select-bordered w-full">
                <option disabled selected>
                  User Role
                </option>
                <option value="User">User</option>
                <option value="Guest">Gest</option>
                <option value="Moderator">Moderator</option>
                <option value="Admin">Admin</option>
                <option value="VIP">VIP</option>
                <option value="Guide">Guide</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <div className="flex justify-end text-xs dark:text-gray-600">
                <a
                  className="text-red-500 underline"
                  rel="noopener noreferrer"
                  href="#"
                >
                  ! Rules
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center text-white rounded-sm bg-primary"
            >
              Sign up
            </button>

          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <NavLink to="/login">
              <a
                rel="noopener noreferrer"
                href="#"
                className="ml-2 text-sky-500 underline"
              >
                Sign in
              </a>
            </NavLink>
            <button onClick={handelgoogle}
              type="submit"
              className="block w-full p-3 text-center text-white rounded-sm bg-primary"
            >
              google
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;