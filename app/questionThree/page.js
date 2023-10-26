import Link from "next/link"

function QuestionThree() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2 mx-auto'>
      <h1 className='text-2xl'>Question Three</h1>
      <h2 className='text-xl'>
        Prompt: When would you choose to use Edge Functions, Serverless
        Functions, or Edge Middleware with Vercel?
      </h2>
      <p>Was unable to make it back to this question in time</p>

      <Link href='/'>Assessment Home</Link>
      <Link href='/questionFour'>Question Four</Link>
    </main>
  )
}

export default QuestionThree
