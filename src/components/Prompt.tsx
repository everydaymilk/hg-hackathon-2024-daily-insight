"use client"

import React, { useRef, useState } from 'react';

interface Props {
  type: string;
  promptText: string;
  onButtonClick?: () => void;
}

const Prompt: React.FC<Props> = (props) => {

  const [promptComplete, setPromptComplete] = useState(false);
  const [response, setResponse] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const userResponseRequired = props.type === "input"

  // Override so that pressing Enter without Shift will submit the response
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      buttonRef.current?.click();
    }
  };

  return (
    <>
      <div className='text-xl'>{props.promptText}</div>
      <textarea
        hidden={promptComplete || !userResponseRequired}
        placeholder='Write your response here...'
        value={response}
        onChange={e => setResponse(e.target.value)}
        onKeyDown={handleKeyDown} />
      <div
        hidden={!promptComplete || !userResponseRequired}
        className='whitespace-pre-wrap font-light'
      >
        {response}
      </div>
      <button
        ref={buttonRef}
        hidden={promptComplete}
        disabled={response === "" && userResponseRequired}
        onClick={() => {
          setPromptComplete(true)
          if (props.onButtonClick) {
            props.onButtonClick()
          }
        }}
      >
        Next
      </button>
    </>
  );
}

export default Prompt;