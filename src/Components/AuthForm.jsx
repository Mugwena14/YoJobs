import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setShowForm(false); 
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowForm(false); 
      navigate("/home");
    } catch (err) {
      setError("Google login failed");
    }
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Auth form */}
      <div className="relative backdrop-blur-xl bg-white/30 shadow-2xl rounded-2xl p-8 w-96 border border-white/40">
        <h2 className="text-2xl font-semibold text-center text-violet-700 mb-6">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleEmailAuth}>
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
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-600 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleAuth}
          className="w-full py-2 flex items-center justify-center gap-2 border border-gray-300 rounded-full text-gray-800 font-medium bg-white/70 hover:bg-white/90 transition ease-in-out duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          {isLogin ? "Log In with Google" : "Sign Up with Google"}
        </button>

        {/* Toggle link */}
        <p className="mt-6 text-center text-sm text-gray-700">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-violet-600 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
