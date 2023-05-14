import { useState, useEffect } from 'react';

const typewriterProps = {
  text: 'Hello World!',
  direction: 'forward',
  repeat: 0,
  speed: 200,
};

function useTypewriter(props) {
  props = props ?? typewriterProps;

  const { text, direction, repeat, speed } = props;
  const textArr = Array.isArray(text) ? text : [text];

  const [message, setMessage] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(repeat);

  let interval;
  let index = 0;

  function type(str) {
    interval = setInterval(() => {
      if (index > str.length) {
        clearInterval(interval);
        if (direction === 'both') backspace(str);
      } else {
        setMessage(str.slice(0, index));
        index++;
      }
    }, speed);
  }

  function backspace(str) {
    interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval);
        setTextCount(prevCount => ++prevCount);
      } else {
        setMessage(str.slice(0, index));
        index--;
      }
    }, speed);
  }

  function typingInit() {
    if (textCount >= textArr.length) {
      if (repeatCount > 0) setRepeatCount(prev => prev - 1);
      setTextCount(0);
    } else {
      if (direction === 'forward' || direction === 'both') {
        type(textArr[textCount]);
      } else if (direction === 'backward') {
        backspace(textArr[textCount]);
      }
    }
  }

  useEffect(() => typingInit(), [textCount]);

  return message;
}

export default useTypewriter;
