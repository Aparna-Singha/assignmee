import { Navigate, useParams } from "react-router-dom";
import { copyToClipboard, generateID } from "../../utils/commons";
import { useCallback, useState } from "react";
import Question from "../../components/Question/Question";

export default function AssignmentTool() {
  const { assignmentId } = useParams();

  if (!assignmentId) {
    const redirectUrl = `/tools/assignment/${generateID()}`;
    return <Navigate to={redirectUrl} replace />;
  }

  const [assignmentData, setAssignmentData] = useState({
    id: assignmentId,
    url: `/assignment/${assignmentId}`,
    name: "Assignment Name",
    questions: [],
  });

  const copyAssigmentUrl = useCallback(() => {
    copyToClipboard(`${window.location.origin}${assignmentData.url}`);
  }, [copyToClipboard, assignmentData]);

  const addQuestion = useCallback(() => {
    const newQuestion = {
      id: generateID(),
      question: "",
      answerType: "Fill",
    };

    setAssignmentData((prevData) => ({
      ...prevData,
      questions: [...prevData.questions, newQuestion],
    }));
  }, [assignmentData]);

  return (
    <>
      <div className="assignment-details">
        <h2 className="assignment-link">
          <span className="assignment-link-text">{assignmentData.url}</span>
          <button
            className="assignment-link-copy-button"
            onClick={copyAssigmentUrl}
          >
            Copy
          </button>
        </h2>

        <div className="assignment-name">
          <input type="text" className="assignment-name-input" />
        </div>
      </div>

      <div className="questions-list">
        {assignmentData.questions.map((question, index) => (
          <Question editMode={true} />
        ))}
      </div>

      <button className="add-question-button" onClick={addQuestion}>
        Add Question
      </button>
    </>
  );
}
