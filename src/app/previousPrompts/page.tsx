import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen space-y-8 p-24">
      <Link href="/prompts/prompt3" className="text-user-font text-2xl text-center border-b-2 border-transparent hover:border-user-font p-8">5/18/2024 Prompt 3</Link>
      <Link href="/prompts/prompt2" className="text-user-font text-2xl text-center border-b-2 border-transparent hover:border-user-font p-8">5/17/2024 Prompt 2</Link>
      <Link href="/prompts/prompt1" className="text-user-font text-2xl text-center border-b-2 border-transparent hover:border-user-font p-8">5/16/2024 Prompt 1</Link>
    </main >
  );
}