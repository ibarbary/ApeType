import { createContext, useState, useEffect } from "react";
import { generate } from "random-words";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [time, setTime] = useState(1 * 60);
  const [chosenTime, setChosenTime] = useState(1 * 60);
  const [startedTyping, setStartedTyping] = useState(false);
  const [timeFinished, setTimeFinished] = useState(false);
  const [paragraph, setParagraph] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [correctCharacters, setCorrectCharacters] = useState([]);
  const [InCorrectCharacters, setInCorrectCharacters] = useState([]);
  const [correctCharactersCount, setCorrectCharactersCount] = useState(0);
  const [InCorrectCharactersCount, setInCorrectCharactersCount] = useState(0);

  useEffect(() => {
    setParagraph(generate(100).join(" ").split(""));
  }, []);

  useEffect(() => {
    function reset() {
      if(timeFinished) return;

      setParagraph(generate(100).join(" ").split(""));
      setCorrectCharacters([]);
      setInCorrectCharacters([]);
      setCurrentCharacter(0);
    }

    window.addEventListener("resize", reset);

    return () => window.removeEventListener("resize", reset);
  }, [chosenTime, timeFinished]);

  useEffect(() => {
    if (time > 0 && startedTyping) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (time == 0) {
      setTimeFinished(true);
    }
  }, [time, startedTyping]);

  return (
    <GlobalContext.Provider
      value={{
        time,
        setTime,
        chosenTime,
        setChosenTime,
        startedTyping,
        setStartedTyping,
        timeFinished,
        setTimeFinished,
        paragraph,
        setParagraph,
        currentCharacter,
        setCurrentCharacter,
        correctCharacters,
        setCorrectCharacters,
        InCorrectCharacters,
        setInCorrectCharacters,
        correctCharactersCount,
        setCorrectCharactersCount,
        InCorrectCharactersCount,
        setInCorrectCharactersCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default Context;
