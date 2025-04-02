import { useState, useCallback } from "react";
import { Navigate } from "react-router-dom";

import { userLoggedIn, userLogin } from "../../utils/auth";

export default function Login({ isCreatorForm, isDisabled, activate }) {
  if (userLoggedIn()) return <Navigate to="/dashboard" />;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    userLogin({
      email,
      password,
      creatorMode: isCreatorForm,
    });
  }, []);

  return (
    <>
      <div className={`auth-container ${isDisabled ? "disabled" : ""}`}>
        <div className="auth-form">
          <div className="auth-form-creator">
            <div className="auth-select-form">
              <input type="radio" checked={!isDisabled} onChange={activate} />
              <span className="auth-selected"></span>
              <h2>{isCreatorForm ? `Creator Login` : `Student Login`}</h2>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isDisabled}
              />
              <label html="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isDisabled}
              />
              <button onClick={handleLogin} disabled={isDisabled}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
