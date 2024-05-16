export default function Page({ params }: { params: { prompt: string } }) {
  return <div>Prompt: {params.prompt}</div>
}