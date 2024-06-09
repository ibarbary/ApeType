import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import { generate } from "random-words";

function Time() {
  const {
    setChosenTime,
    setStartedTyping,
    setParagraph,
    setTime,
    setTimeFinished,
    chosenTime,
    setCorrectCharacters,
    setInCorrectCharacters,
    setCorrectCharactersCount,
    setInCorrectCharactersCount,
    setCurrentCharacter,
  } = useContext(GlobalContext);

  useEffect(() => {
    setStartedTyping(false);
    setParagraph(generate(100).join(" ").split(""));
    setTime(chosenTime);
    setCorrectCharacters([]);
    setInCorrectCharacters([]);
    setCorrectCharactersCount(0);
    setInCorrectCharactersCount(0);
    setCurrentCharacter(0);
    setTimeFinished(false);
  }, [chosenTime]);

  return (
    <div className="timeContainer">
      <h3>Time Duration</h3>
      <span
        className={chosenTime === 1 * 60 ? "activeTime" : null}
        onClick={() => {
          setChosenTime(1 * 60);
          setTime(1 * 60);
        }}
      >
        1:00
      </span>
      <span
        className={chosenTime === 3 * 60 ? "activeTime" : null}
        onClick={() => {
          setChosenTime(3 * 60);
          setTime(3 * 60);
        }}
      >
        3:00
      </span>
      <span
        className={chosenTime === 5 * 60 ? "activeTime" : null}
        onClick={() => {
          setChosenTime(5 * 60);
          setTime(5 * 60);
        }}
      >
        5:00
      </span>
      <span
        className={chosenTime === 10 * 60 ? "activeTime" : null}
        onClick={() => {
          setChosenTime(10 * 60);
          setTime(10 * 60);
        }}
      >
        10:00
      </span>
      <span
        className={chosenTime === 15 * 60 ? "activeTime" : null}
        onClick={() => {
          setChosenTime(15 * 60);
          setTime(15 * 60);
        }}
      >
        15:00
      </span>
      <span
        className={chosenTime === 30 * 60 ? "activeTime" : null}
        onClick={() => {
          setChosenTime(30 * 60);
          setTime(30 * 60);
        }}
      >
        30:00
      </span>
    </div>
  );
}
export default Time;
