import React, {useState} from 'react';

const synth = window.speechSynthesis;
const voices = synth.getVoices();

const useSpeach = () => {
  const [voice, setVoice] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  

  const say = (words) => {
    const utterance = new SpeechSynthesisUtterance(words);
    utterance.voice = voices[voice];
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.speak(utterance);
  }

  return {
    say,
    setVoice,
    setPitch, 
    setRate
  }

}

export default useSpeach;