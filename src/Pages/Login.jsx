import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", username);
    alert("Login succesfully");
    navigate("/cart");
  };
  return (
    <>
      <div className="h-max flex justify-center items-center bg-black">
        {" "}
        <div className="w-full max-w-md p-4 bg-gray-200 rounded shadow-md">
          {" "}
          <h2 className="text-3xl font-bold mb-4">
            Login
          </h2>
          <form
            action=""
            className="block mb-2 text-md font-bold"
            onSubmit={handlesubmit}
          >
            <label
              htmlFor="email"
              className="block mb-2 text-md font-bold"
            >
               Username:{" "}
            </label>
            <input
              type="text"
              className="w-full p-2 pl-8 text-md text-gray-600 border-2"
              placeholder="Enter username 🙂"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
            <input
              type="submit"
              value="Login"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("email",'password');
//         alert("Login succesfully");
//     // Handle login logic here
//     navigate('/');
//   }

//   return (
//     <div className="h-max flex justify-center items-center">
//       <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
//         <h2 className="text-3xl font-bold mb-4">Login</h2>
//         <form onSubmit={handlesubmit}>
//           <label htmlFor="email" className="block mb-2 text-md font-bold">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 pl-10 text-sm text-gray-700 border-2"
//             placeholder="example@example.com"
//           />
//           <br />
//           <button
//             type="submit"
//             value="login"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
