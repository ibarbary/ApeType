import { useContext, useEffect, useRef } from "react";
import { generate } from "random-words";
import { GlobalContext } from "../Context";

function TypingParagraph() {
  const {
    time,
    timeFinished,
    paragraph,
    setParagraph,
    startedTyping,
    setStartedTyping,
    currentCharacter,
    setCurrentCharacter,
    correctCharacters,
    setCorrectCharacters,
    InCorrectCharacters,
    setInCorrectCharacters,
    setCorrectCharactersCount,
    setInCorrectCharactersCount,
  } = useContext(GlobalContext);

  const ref = useRef();

  useEffect(() => {
    if (ref?.current?.getBoundingClientRect().y > 370) {
      setCorrectCharacters([]);
      setInCorrectCharacters([]);
      setCurrentCharacter(0);
      setParagraph(generate(100).join(" ").split(""));
    }
  }, [currentCharacter]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (timeFinished) return;

      if (e.key == "Backspace") {
        if (currentCharacter == 0) return;

        if (
          correctCharacters[correctCharacters?.length - 1] ==
          currentCharacter - 1
        ) {
          correctCharacters.splice(-1);
          setCorrectCharacters(correctCharacters);
          setCorrectCharactersCount((prevCount) => {
            return prevCount - 1;
          });
        } else {
          InCorrectCharacters.splice(-1);

          setInCorrectCharacters(InCorrectCharacters);
          setInCorrectCharactersCount((prevCount) => {
            return prevCount - 1;
          });
        }

        setCurrentCharacter((prevIndex) => {
          return prevIndex - 1;
        });
      } else {
        if (currentCharacter == 0) setStartedTyping(true);

        if (e.key == paragraph[currentCharacter]) {
          setCorrectCharacters((prevCorrectCharacters) => {
            return [...prevCorrectCharacters, currentCharacter];
          });

          setCorrectCharactersCount((prevCount) => {
            return prevCount + 1;
          });
        } else {
          setInCorrectCharacters((prevInCorrectCharacters) => {
            return [...prevInCorrectCharacters, currentCharacter];
          });

          setInCorrectCharactersCount((prevCount) => {
            return prevCount + 1;
          });
        }

        setCurrentCharacter((prevIndex) => {
          return prevIndex + 1;
        });
      }
    }

    if (timeFinished) {
      setCurrentCharacter(-1);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [paragraph, currentCharacter, timeFinished]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div
      className="typingParagraph"
      style={{ cursor: timeFinished ? "not-allowed" : null }}
    >
      <span className="timer">
        {startedTyping ? `${minutes}:${seconds < 10 ? "0" : ""}${seconds}` : ""}
      </span>
      {paragraph?.length == 0 ? (
        <p>...</p>
      ) : (
        <>
          <p>
            {paragraph?.map((char, index) => {
              return (
                <span
                  key={index}
                  style={{
                    backgroundColor:
                      index == currentCharacter
                        ? "#333"
                        : char == " " && InCorrectCharacters.includes(index)
                        ? "#d13535"
                        : null,
                    color: correctCharacters.includes(index)
                      ? "#82ff62"
                      : InCorrectCharacters.includes(index)
                      ? "#ff4d4d"
                      : null,
                  }}
                  ref={index == currentCharacter ? ref : null}
                >
                  {char}
                </span>
              );
            })}
          </p>
        </>
      )}
    </div>
  );
}
export default TypingParagraph;
