import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Account.css";

export const Account = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ identifier, password }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      login(data.accessToken);

      console.log("Access Token:", data.accessToken);
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="account-section">
      <div className="site-content">
        <div className="login-container">
          <h2>Welcome back!</h2>
          <p>Sign in to your account</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label className="label">Email or Username</label>
              <input
                className="input"
                type="text"
                placeholder="you@example.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="button" type="submit" disabled={loading}>
              Sign In
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          <p className="footer" style={{ whiteSpace: "pre-wrap" }}>
            {"Don't have an account? "}
            <a href="/signup" className="link">
              Create one
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
