import { useNavigate } from "react-router";
import { useActionState } from "react";

const Login = () => {
  interface FormState {
    error: string | null;
    enteredEmail?: string;
  }

  const navigate = useNavigate();

  const handleLogin = (_: FormState, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password");

    if (email == "admin" && password == "tst") {
      document.cookie = "logged_in=true; path=/";

      navigate("/");
      return { error: null };
    }

    return { error: "Invalid email or password", enteredEmail: email };
  };

  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    handleLogin,
    {
      error: null,
    },
  );

  return (
    <div>
      <form action={formAction}>
        <div className="flex flex-col items-center gap-3 mx-96 px-44">
          <input
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={state.enteredEmail}
            className="w-full bg-slate-800 border-none text-sm rounded-full py-2 px-4 focus:ring-2 focus:ring-red-600 outline-none transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-slate-800 border-none text-sm rounded-full py-2 px-4 focus:ring-2 focus:ring-red-600 outline-none transition"
          />
          {state?.error && (
            <p className="text-red-500 text-xs mt-1 italic">{state.error}</p>
          )}
          <button
            disabled={isPending}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-5 rounded-md transition cursor-pointer"
            type="submit"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
