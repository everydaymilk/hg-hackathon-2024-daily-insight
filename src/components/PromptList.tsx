"use client"

import Prompt from "@/components/Prompt";
import { useState } from 'react';


interface Props {
  prompts: any[];
}

const PromptList: React.FC<Props> = (props) => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-4'>
      {props.prompts.slice(0, currentPromptIndex + 1).map((prompt, index) => (
        <Prompt key={index} promptText={prompt.promptText} type={prompt.type} onButtonClick={() => setCurrentPromptIndex((prevPromptIndex) => prevPromptIndex + 1)} />
      ))
      }
    </div>
  );
}

export default PromptList;