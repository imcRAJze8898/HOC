import { useState } from 'react';
import './App.css';

function HigherOrder<P>(OldComponent: React.ComponentType<P>) {
  return function EnhancedComp(props: P) {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      setCounter(counter + 1);
    };

    // Spread props to pass any additional props to the OldComponent
    return (
        <OldComponent
          {...props}
          counter={counter}
          incrementCounter={incrementCounter}
        />
    );
  };
}

export default HigherOrder;
