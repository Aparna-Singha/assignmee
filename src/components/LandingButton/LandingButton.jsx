import { Link } from "react-router-dom";
import "./LandingButton.css";

export default function LandingButton() {
  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <Link to="/auth" className="landing-link">
            <button className="landing-button-box">
              Start Your Assignment Journey
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
