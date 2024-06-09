import { IoMdRefresh } from "react-icons/io";
import { generate } from "random-words";
import { useContext } from "react";
import { GlobalContext } from "../Context";

function Reset() {
  const {
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

  function reset() {
    setStartedTyping(false);
    setParagraph(generate(100).join(" ").split(""));
    setTime(chosenTime);
    setCorrectCharacters([]);
    setInCorrectCharacters([]);
    setCorrectCharactersCount(0);
    setInCorrectCharactersCount(0);
    setCurrentCharacter(0);
    setTimeFinished(false);
  }

  return (
    <div className="resetContainer">
      <IoMdRefresh className="resetIcon" onClick={reset} />
    </div>
  );
}
export default Reset;
