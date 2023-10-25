import Link from 'next/link'

function Page() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2'>
      <h1 className='text-2xl'>Question Two</h1>
      <h2 className='text-xl'>
        Prompt: How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.
      </h2>
      <p>
        
      </p>
      
      <Link href='/'>Assessment Home</Link>
      <Link href='/questionTwo'>Question Three</Link>
    </main>
  )
}

export default Page
