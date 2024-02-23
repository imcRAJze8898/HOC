import './App.css';
import HigherOrder from './HigherOrder';
// Create the ClickCounter component
interface ClickCounterProps {
  counter: number;
  incrementCounter: () => void;
}
function ClickCounter(props: ClickCounterProps) {
  const { counter, incrementCounter } = props;
  return (
    <>
      <button onClick={() => incrementCounter()}>BUTTON CLICK</button>
      {counter}
    </>
  );
}

// Wrap ClickCounter with HigherOrder and export it
export default HigherOrder<ClickCounterProps>(ClickCounter);
