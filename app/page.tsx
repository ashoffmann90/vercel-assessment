import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl">Drew Hoffmann Vercel Assessment</h1>
      <Link href="/questionOne">Question One</Link>
      <Link href='/questionTwo'>Question Two</Link>
      <Link href='/questionThree'>Question Three</Link>
      <Link href='/questionFour'>Question Four</Link>

    </main>
  )
}
