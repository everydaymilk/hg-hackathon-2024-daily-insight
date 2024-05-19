import PromptList from '@/components/PromptList';
import { promises as fs } from 'fs';

export default async function Page({ params }: { params: { promptId: string } }) {
  if (!params.promptId) {
    return <>Prompt not found</>
  }
  let file;
  try {
    file = await fs.readFile(process.cwd() + `/src/prompts/${params.promptId}.json`, 'utf8');
  } catch {
    return <>Prompt not found</>
  }
  const data = JSON.parse(file);

  return (
    <div>
      <h1 className='text-2xl'>{params.promptId}</h1>
      <PromptList prompts={data.prompts} />
    </div>
  );
}