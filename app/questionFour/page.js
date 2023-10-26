import Link from "next/link"

function QuestionFour() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2 mx-auto'>
      <h1 className='text-2xl'>Question Four</h1>
      <h2 className='text-xl'>
        Prompt: A customer has a project on Vercel and they want to redirect the
        /blog path to another website. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you&apos;d like to share about your decision making process.
      </h2>
      <p>Hey there valued customer!</p>
      <p>My name is Drew, and I&apos;m with Next.js Customer Success.</p>
      <p>
        I understand you&apos;d like to redirect the &apos;/blog&apos; path on your website to
        your Daria fandom home page found at:
        &apos;https://daria.fandom.com/wiki/Main_Page&apos;. I would love to help!
      </p>
      <p>
        Thankfully, Next.js makes redirecting to an external page relatively
        straightforward. Below, I&apos;ll provide a basic example with an
        explanation, as well as providing documentation for you to look deeper
        into the topic, should you need to further customize the redirect.
      </p>
      <p>
        In short, you&apos;ll want to add an async &apos;redirects()&apos; function to your
        &apos;module.exports&apos; in the next.config.js. For basic redirecting, you&apos;ll
        want to add the source, destination, and permanent properties. The
        source is the incoming request&apos;s path pattern (or the path you want to
        redirect users away from). The destination is the path you&apos;re routing to
        (or where you want to send the user). Permanent determines whether or
        not that redirect will be cached (use &apos;true&apos; to cache the redirect,
          &apos;false&apos; to not cache the redirect).
      </p>
      <p>
        Here is the basic example from our documentation:
        https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
      </p>
      <p>
        In the above link, you can also find more in-depth information about
        redirects should you need to customize them further. Of course, should
        you have additional questions I&apos;m happy to help.
      </p>
      <p>
        P.S. If you are interested in masking the destination path you may
        choose to look into using a rewrite, which follows similar
        implementation as a redirect. If you&apos;re curious about that, here is the
        documentation:
        https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites
      </p>
      <h2 className='text-xl'>Supporting Documentation</h2>
      <p>
        Redirects:
        https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
      </p>
      <p>
        Rewrites:
        https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites
      </p>
      <h2 className='text-xl'>Decision Making</h2>
      <p>
        I wanted to provide as much help as possible, but without doing the work
        for the customer. In my previous role in Technical Support, we wanted to
        primarily be a troubleshooting resource, and secondarily an educational
        resource. I also find that if the customer has to interact with the
        documentation (even if that is just to look at the examples), that can
        often be enough to expose them to what they&apos;re looking for. They may
        also come across a better solution.
      </p>
      <p>
        When I was initally searching Google for redirecting in Next.js, I came
        across rewrites and thought that may be a good thing for the customer to
        be aware of. So I presented that in a way that simplifies it and might
        peak their curiousity, but doesn&apos;t inflate/dilute my response in a
        meaningless way.
      </p>
      <p>
        I left room for additional questions, as we can use that to improve
        documentation or Customer Success troubleshooting material if we notice
        customers asking similar questions around the same areas in the
        documentation.
      </p>
      <Link href='/'>Assessment Home</Link>
      <Link href='/questionFive'>Question Five</Link>
    </main>
  )
}

export default QuestionFour
