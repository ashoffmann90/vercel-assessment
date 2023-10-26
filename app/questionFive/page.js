import Link from "next/link"

function QuestionFive() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2 mx-auto'>
      <h1 className='text-2xl'>Question Five</h1>
      <h2 className='text-xl'>
        Prompt: Imagine that the customer from Question 4 responds with the following email: <q>I am so frustrated. I have been trying to make this work for hours and I just cannot figure it out. It must be a platform issue so why don&apos;t you just fix it for me instead of asking me questions.</q>
      </h2>
      <p>Hi there Jane Lane,</p>
      <p>I understand your frustration, and I would like to help as best as I can. As much as I would love to simply fix this for you, we do need to ask these questions so we can understand where you are stuck. If you are willing to show me what you have done so far, I may be able to point you in the right direction.</p>
      <p>Would you be willing to share with me what you have done so far (your next.config.js file would be helpful), as well as any error messages you may have encountered?</p>
      <p>I appreciate your willingnesss to continue troubleshooting this with me!</p>

      <Link href='/'>Assessment Home</Link>
      <Link href='/questionSix'>Question Six</Link>
    </main>
  )
}

export default QuestionFive