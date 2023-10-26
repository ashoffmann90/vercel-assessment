import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2 mx-auto'>
      <h1 className="text-2xl">Drew Hoffmann Vercel Assessment</h1>
      <Link href="/questionOne">Question One</Link>
      <Link href='/questionTwo'>Question Two</Link>
      <Link href='/questionThree'>Question Three</Link>
      <Link href='/questionFour'>Question Four</Link>
      <Link href='/questionFive'>Question Five</Link>
      <Link href='/questionSix'>Question Six</Link>

      <h2 className="text-xl">
        Final Notes
      </h2>
      <p>
        Thank you for the opportunity to interview for the Senior Customer Success Engineer position at Vercel!
      </p>
      <p>
        I was unable to make it back to question 3, nor did I get to question 7 before the three hour mark. There are still concepts that I need to familiarize myself with within the Next.js environment in order to complete all the tasks within the 3 hour mark. Given another 30 minutes, I probably could have felt confident enough to answer question 3.
      </p>
      <p>
        Truthfully, my curiousity of Next.js features that were very similar to the features being asked about in the questions probably slowed down my response time. For instance reading into rewrites vs redirects, or using a robot.txt file vs a simple noindex meta tag.
      </p>
      <p>
        I do think this was a fun familiarization exercise, and my only recommendation would be to allow for a little more time.
      </p>
      <p>
        Again, thank you for the opportunity and I look forward to feedback! Happy Wednesday!
      </p>
    </main>
  )
}
