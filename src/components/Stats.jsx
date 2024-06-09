import { useContext} from "react";
import { GlobalContext } from "../Context";

function Stats() {
  const { correctCharactersCount, InCorrectCharactersCount, chosenTime } =
    useContext(GlobalContext);

  const totalCharactersCount = correctCharactersCount + InCorrectCharactersCount;
  const WPM = correctCharactersCount / 5 / (chosenTime / 60);
  const RawWPM = totalCharactersCount / 5 / (chosenTime / 60);
  const Accuracy = (correctCharactersCount / totalCharactersCount) * 100;

  return (
    <div className="statsContainer">
      <h1>{Math.ceil(WPM)} WPM</h1>
      <section>
        <span>Raw WPM</span>
        <span>{Math.ceil(RawWPM)}</span>
      </section>
      <section>
        <span>Accuracy</span>
        <span>{`${Accuracy.toFixed(1)}%`}</span>
      </section>
      <section>
        <span>Correct Characters</span>
        <span>{correctCharactersCount}</span>
      </section>
      <section>
        <span>Incorrect Characters</span>
        <span>{InCorrectCharactersCount}</span>
      </section>
    </div>
  );
}
export default Stats;
