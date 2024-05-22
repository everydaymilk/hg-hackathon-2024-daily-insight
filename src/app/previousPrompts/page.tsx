import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen space-y-8 p-4">
      <Link href="/prompts/prompt3" className="text-user-font text-2xl text-center border-b-2 border-transparent hover:border-user-font p-8">5/22/2024 - When do you feel happy?</Link>
      <Link href="/prompts/prompt2" className="text-user-font text-2xl text-center border-b-2 border-transparent hover:border-user-font p-8">5/21/2024 - When have you felt hurt?</Link>
      <Link href="/prompts/prompt1" className="text-user-font text-2xl text-center border-b-2 border-transparent hover:border-user-font p-8">5/20/2024 - When have you felt stressed?</Link>
    </main >
  );
}