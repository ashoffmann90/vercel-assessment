import Link from 'next/link'

function QuestionOne() {
  return (
    <main className='flex min-h-screen flex-col space-y-4 items-center p-24 w-1/2'>
      <h1 className='text-2xl'>Question One</h1>
      <h2 className='text-xl'>
        Prompt: Describe how you solved a challenge that one of your previous
        teams faced. How did you determine your solution was successful?
      </h2>
      <p>
        Chanllenge: At New Relic and as a Technical Support Engineer, while we
        did have a Wiki style space to store knowledge of the products,
        troubleshooting procedures, and common issues, one challenge we
        encountered was knowledge being lost, out of date, and there was no
        process in place to maintain that information.
      </p>
      <p>
        Action Plan: When I first started at New Relic, I had struggled with the
        lack of product training and finding up to date information as there was
        nothing set in place to verify whether it was accurate. I took the
        initiative to lead the Wiki Knowledge Maintenance project for our team.
        This included assigning at least two people per product (Browser
        Monitoring, Mobile Application Monitoring, and Synthetic Testing) to
        take charge of deprecating, validating, and updating the content of our
        Wiki spaces. This required communication with our software engineers to
        validate some of the information that was not explicit from our
        documentation, searching through recent Slack threads and previous
        support tickets, and JIRA for information stored in bug tickets.
      </p>
      <p>
        Success Criteria: One thing we saw which indicated this was successful,
        was an increase in people viewing articles, and viewing a wider variety
        of articles. We also noticed that there was a decrease in bug tickets
        filed by Technical Support, therefore freeing our Software Engineers up
        for higher priority work and improving troubleshooting among Technical
        Support. Decrease of these tickets his has been a larger goal of the
        Technical Support Organization, once that descrease was noticed by
        Technical Support leadership other teams started accepting our model of
        Wiki Maintenance.
      </p>
      <Link href='/'>Assessment Home</Link>
      <Link href='/questionTwo'>Question Two</Link>
    </main>
  )
}

export default QuestionOne
