import { useContext } from "react";
import Reset from "./components/Reset";
import Stats from "./components/Stats";
import Time from "./components/Time";
import Title from "./components/Title";
import TypingParagraph from "./components/TypingParagraph";
import { GlobalContext } from "./Context";

function App() {
  const { timeFinished } = useContext(GlobalContext);

  return (
    <>
      <Title />
      <Time />
      <TypingParagraph />
      <Reset />
      {timeFinished ? <Stats /> : null}
    </>
  );
}
export default App;
