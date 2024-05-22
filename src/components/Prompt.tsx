"use client"

import React, { useRef, useState, useEffect } from 'react';

interface Props {
  type: string;
  promptText: string;
  onButtonClick?: () => void;
}


const Prompt: React.FC<Props> = (props) => {

  const [promptComplete, setPromptComplete] = useState(false);
  const [response, setResponse] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const hideNextButton = promptComplete || props.type === "final"

  // Hacky way to auto-resize text area height
  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = "inherit";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  }, [response]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const userResponseRequired = props.type === "input"

  const enabledButtonClass = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  const disabledButtonClass = "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-3 py-1.5 text-center"

  return (
    <>
      <div className='text-2xl text-black'>{props.promptText}</div>
      <textarea
        ref={textAreaRef}
        rows={1}
        hidden={promptComplete || !userResponseRequired}
        className='text-xl text-user-font w-1/2 bg-transparent resize-none border-b-2 border-button-bg-default overflow-hidden outline-none'
        placeholder='Write your response here...'
        value={response}
        onChange={e => setResponse(e.target.value)} />
      <div
        hidden={!promptComplete || !userResponseRequired}
        className='whitespace-pre-wrap text-user-font text-xl'
      >
        {response}
      </div>
      <button
        ref={buttonRef}
        className={promptComplete || (response === "" && userResponseRequired) ? disabledButtonClass : enabledButtonClass}
        hidden={hideNextButton}
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