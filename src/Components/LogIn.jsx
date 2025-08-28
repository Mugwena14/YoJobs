import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showLogin, setShowLogin] = useState(true)
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
        await createUserWithEmailAndPassword(auth, email, password);
        setShowLogin(false)
        // success: redirect or close modal
        } catch (err) {
        setError("Invalid email or password");
        }
        navigate("/index");
    };

    const handleGoogleLogin = async () => {
        try {
        await signInWithPopup(auth, googleProvider);
        setShowLogin(false)
        // success: redirect or close modal
        } catch (err) {
        setError("Google sign-in failed");
        }
        navigate("/index");
    };

    if (!showLogin) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

            {/* Login form */}
            <div className="relative backdrop-blur-xl bg-white/30 shadow-2xl rounded-2xl p-8 w-96 border border-white/40">
                <h2 className="text-2xl font-semibold text-center text-violet-700 mb-6">
                Sign in with Email
                </h2>

                {error && (
                <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <form onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mb-4 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/70"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mb-6 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/70"
                />
                <button
                    type="submit"
                    className="w-full py-2 mb-4 rounded-full bg-gradient-to-r from-violet-500 to-teal-500 text-white font-medium hover:opacity-90 transition ease-in-out duration-300"
                >
                    Sign in
                </button>
                </form>

                <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-600 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
                </div>

                <button
                onClick={handleGoogleLogin}
                className="w-full py-2 flex items-center justify-center gap-2 border border-gray-300 rounded-full text-gray-800 font-medium bg-white/70 hover:bg-white/90 transition ease-in-out duration-300"
                >
                <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                />
                Sign in with Google
                </button>
            </div>
        </div>

    );
}


export default LogIn;