import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Link href="/prompt-1"> Prompt 1</Link>
      <Link href="/prompt-2"> Prompt 2</Link>
      <Link href="/prompt-3"> Prompt 3</Link>
    </main >
  );
}