import { useState, useCallback } from "react";
import { Navigate } from "react-router-dom";

import { userLoggedIn, userRegister } from "../../utils/auth";

export default function SignUp({ isCreatorForm, isDisabled, activate }) {
  if (userLoggedIn()) return <Navigate to="/dashboard" />;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = useCallback(() => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    userRegister({
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
              <input type="radio" checked={!isDisabled} onClick={activate} />
              <span className="auth-selected"></span>
              <h2>{isCreatorForm ? `Creator Sign Up` : `Student Sign Up`}</h2>
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
              <label html="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isDisabled}
              />
              <button onClick={handleSignup} disabled={isDisabled}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
