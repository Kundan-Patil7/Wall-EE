import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { IoCloseSharp } from "react-icons/io5";
const Login = () => {
    const { logincard, setlogincard } = useContext(UserContext);

    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!logincard) return null; 

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-10 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200">
                <button
                    className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => setlogincard(false)} // Close the modal
                >
                    <IoCloseSharp/>
                </button>
                <form className="flex flex-col gap-4">
                    <p className="text-2xl font-medium text-center">
                        <span className="text-indigo-500">User</span>{" "}
                        {state === "login" ? "Login" : "Sign Up"}
                    </p>
                    {state === "register" && (
                        <div className="w-full">
                            <p>Name</p>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="type here"
                                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                                type="text"
                                required
                            />
                        </div>
                    )}
                    <div className="w-full">
                        <p>Email</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="type here"
                            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                            type="email"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <p>Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="type here"
                            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                            type="password"
                            required
                        />
                    </div>
                    {state === "register" ? (
                        <p className="text-center">
                            Already have an account?{" "}
                            <span
                                onClick={() => setState("login")}
                                className="text-indigo-500 cursor-pointer"
                            >
                                Click here
                            </span>
                        </p>
                    ) : (
                        <p className="text-center">
                            Create an account?{" "}
                            <span
                                onClick={() => setState("register")}
                                className="text-indigo-500 cursor-pointer"
                            >
                                Click here
                            </span>
                        </p>
                    )}
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
                    >
                        {state === "register" ? "Create Account" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
