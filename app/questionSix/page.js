import Link from "next/link"

function QuestionSix() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2 mx-auto'>
      <h1 className='text-2xl'>Question Six</h1>
      <h2 className='text-xl'>
        Prompt: A customer is creating a site and would liek their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback
        or information you&apos;d like to share about your decision making process.
      </h2>
      <p>Hey there Jane Lane!</p>
      <p>Thanks for reaching out to Customer Success, I&apos;m Drew.</p>
      <p>I understand that you would like to prevent your site from being indexed by search engines. I would be happy to help!</p>
      <p>We do offer some resources on Crawling and Indexing of websites that I would highly recommend looking through as you may choose to further customize the indexing of your site. Here is where I would recommend starting: https://nextjs.org/learn/seo/introduction-to-seo/webcrawlers</p>
      <p>
        If you would like a straightforward solution, the following page should help: https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt
      </p>
      <p>
        There, you should find that you will want to add a robots.txt file to your public folder, which will communicate to search engines not to allow your site to be indexed. Should you need to specify further when and what should be blocked or allowed, the robots.txt file give you the options to do so.
      </p>
      <p>
        Should you need further assistance, please let me know and I would be happy to assist!
      </p>

      <Link href='/'>Assessment Home</Link>
    </main>
  )
}

export default QuestionSix