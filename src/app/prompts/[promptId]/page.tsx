import PromptList from '@/components/PromptList';
import { promises as fs } from 'fs';

export async function generateStaticParams() {
  // Add prompts here so that they are generated as static pages
  const promptIds = ['prompt1', 'prompt2', 'prompt3']
  return promptIds.map((id) => ({
    promptId: id,
  }))
}

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
      <PromptList prompts={data.prompts} />
    </div>
  );
}