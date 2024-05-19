import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Link href="/prompt1"> Prompt 1</Link>
      <Link href="/prompt2"> Prompt 2</Link>
      <Link href="/prompt3"> Prompt 3</Link>
    </main >
  );
}