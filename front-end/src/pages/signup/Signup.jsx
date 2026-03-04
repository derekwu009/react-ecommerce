import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, username, password }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      const loginRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ identifier: email, password }),
        },
      );

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        setError(loginData.message);
        return;
      }

      login(loginData.accessToken);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Server error.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="signup-section">
      <div className="site-content">
        <div className="login-container">
          <h2>Create an account !</h2>
          <p>Join us and start reading !!!</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label className="label">Username</label>
              <input
                className="input"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

            <div className="field-group">
              <label className="label">Confirm Password</label>
              <input
                className="input"
                type="password"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button className="button" type="submit" disabled={loading}>
              Sign Up
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          <p className="footer" style={{ whiteSpace: "pre-wrap" }}>
            {"Already have an account? "}
            <a href="/account" className="link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
