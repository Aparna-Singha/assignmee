import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/landing";
import Auth from "./pages/landing/auth";
import Creator from "./pages/dashboards/creator";
import Worker from "./pages/dashboards/worker";
import Assignment from "./pages/tools/assignment";
import Answered from "./pages/assignments/Answered";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/dashboards/creator" element={<Creator />} />
          <Route path="/dashboards/worker" element={<Worker />} />

          <Route path="/tools/assigment" element={<Assignment />} />

          <Route path="/assigment/:id" element={<Answered />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
