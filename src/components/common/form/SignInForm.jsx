import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="w-full max-w-xs" >
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" noValidate>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputEmail">E-mail</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="inputEmail"
                            name="email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="lock text-gray-700 text-sm font-bold mb-2" htmlFor="inputPassword">Password</label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            id="inputPassword"
                            name="password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link to="../signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create an Account</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;