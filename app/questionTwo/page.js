import Link from 'next/link'

function Page() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2 mx-auto'>
      <h1 className='text-2xl'>Question Two</h1>
      <h2 className='text-xl'>
        Prompt: How would you compare Next.js with another framework? Feel free
        to compare with a framework of your choice.
      </h2>
      <p>
        As a developer, my time has been spent mostly in React and Next. So, I
        will be comparing Next and React.
      </p>
      <p>
        While Next is based off of React, they are wonderfully different. While
        Next excels in Server Side Rendering, while React excels in Client Side
        Rendering. That difference allows you more control over the DOM when
        using Next. This is a large part of why users that need to optimize
        their SEO would use Next over React, as the DOM is what search engines
        look through. Whereas out of the box React uses only Client Side
        Rendering. There are ways around the issues with SEO using just React
        and to implement SSR, but Next addresses those without additional
        workarounds/tools.
      </p>
      <p>
        Other differences between Next and React are that deployment is
        streamlined and easier due to the integration with Vercel, as well as
        having built-in tools, components and libraries. React does have access
        to many additonal tools, however they are not built-in. These allow for
        quicker development of your applications.
      </p>

      <Link href='/'>Assessment Home</Link>
      <Link href='/questionThree'>Question Three</Link>
    </main>
  )
}

export default Page
