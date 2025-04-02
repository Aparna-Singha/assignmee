import { useCallback, useState } from "react";

import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import { useNavigate, useParams } from "react-router-dom";

export default function Auth() {
  const { mode } = useParams();
  const navigate = useNavigate();

  const [selectedCreatorForm, setSelectedCreatorForm] = useState(false);

  if ((mode !== "signup" && mode !== "login") || !mode) {
    navigate("/auth/login");
    return;
  }

  const selectCreatorForm = useCallback(() => {
    setSelectedCreatorForm(true);
  }, [setSelectedCreatorForm]);

  const selectStudentForm = useCallback(() => {
    setSelectedCreatorForm(false);
  }, [setSelectedCreatorForm]);

  const switchMode = useCallback(() => {
    navigate(`/auth/${mode === "login" ? "signup" : "login"}`);
  }, [navigate]);

  return (
    <>
      {mode === "login" && (
        <div className="login">
          <Login
            isCreatorForm={true}
            isDisabled={!selectedCreatorForm}
            activate={selectCreatorForm}
          />
          <Login
            isCreatorForm={false}
            isDisabled={selectedCreatorForm}
            activate={selectStudentForm}
          />
        </div>
      )}

      {mode === "signup" && (
        <div className="signup">
          <SignUp
            isCreatorForm={true}
            isDisabled={!selectedCreatorForm}
            activate={selectCreatorForm}
          />
          <SignUp
            isCreatorForm={false}
            isDisabled={selectedCreatorForm}
            activate={selectStudentForm}
          />
        </div>
      )}

      <div className="switch-mode">
        <button onClick={switchMode}>
          {mode === "login" ? "Sign Up Instead" : "Log In Instead"}
        </button>
      </div>
    </>
  );
}
