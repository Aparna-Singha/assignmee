import { useCallback } from "react";
import AnswerBox from "../AnswerBox/AnswerBox";

export default function Question({
  editMode,
  questionId,
  question = "",
  answerType = null,
  saveQuestion = (questionInput, answerInput) => {},
  updateResponse = (ans) => {},
}) {
  const [questionInput, setQuestionInput] = useState(question);
  const [answerInput, setAnswerInput] = useState(null);

  const saveData = useCallback(() => {
    saveQuestion(questionInput, answerInput);
  }, [questionInput, answerInput, saveQuestion]);

  const updateAnswer = useCallback(() => {
    updateResponse(answerInput);
  }, []);

  return (
    <div className="question" key={questionId} id={questionId}>
      <div className="question-text">{question}</div>
      <div className="answer">
        {editMode ? (
          <select onChange={({ target: { value } }) => setAnswerInput(value)}>
            <option value="Fill">Fill</option>
          </select>
        ) : (
          <AnswerBox answerType={answerType} updateCallback={updateResponse} />
        )}
      </div>
    </div>
  );
}
