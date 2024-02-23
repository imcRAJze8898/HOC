import './App.css';
import HigherOrder from './HigherOrder';
interface ClickCounterProps {
  counter: number;
  incrementCounter: () => void;
}
function HoverCounter(props: ClickCounterProps) {
  const { counter, incrementCounter } = props;
  return (
    <div>
      <button onMouseOver={() => incrementCounter()}>BUTTON HOVER</button>
      {counter}
    </div>
  );
}

export default HigherOrder<ClickCounterProps>(HoverCounter);
