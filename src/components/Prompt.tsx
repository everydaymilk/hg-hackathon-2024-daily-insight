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

  const enabledButtonClass = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  const disabledButtonClass = "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-3 py-1.5 text-center"

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
        className={promptComplete || (response === "" && userResponseRequired) ? disabledButtonClass : enabledButtonClass}
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