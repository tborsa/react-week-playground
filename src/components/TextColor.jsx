import React from 'react';
import useMousePosition from '../hooks/useMousePosition';
import useSpeach from '../hooks/useSpeach';
import { useEffect } from 'react';

const TextColor = (props) => {
  const [x,y] = useMousePosition(props.offset);
  const {say, setPitch} = useSpeach();
  const colorStyle = {
    color: `rgb(${x}, ${y}, 100)`
  }
  useEffect(() => {
    setPitch(x/100);
  }, [x, setPitch]);
  return (
    <div>
      <h2 style={colorStyle}>Whoah!!</h2>
      <button onClick={()=>{say('Back in the bootcamp')}}>Speak</button>
    </div>
  );
};

export default TextColor;