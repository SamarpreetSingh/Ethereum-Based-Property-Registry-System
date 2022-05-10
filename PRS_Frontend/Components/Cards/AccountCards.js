import React from 'react'
import Card from './Card/Card'
import InvertCard from './Card/InvertCard'
const Accountcards = () => {
  return (
    <div>
      <Card
        heading="Understand your prospects better with emotional intelligence"
        subheading="Get insights on what got them hooked, what turned them off, and moments of excitement and rapport building. Appeal to their needs and desires and craft a better deal so that both of you win."
        img="/Assets/AccountCards/card1.png"
      />
      <InvertCard
        heading="No more painful note-taking during a call"
        subheading="Bye bye handwritten notes. Sybill captures next steps, questions and answers, pain points and pricing discussions from your call so that you can focus on your prospect. Sync your notes with your CRM or export them to your Slack."
        img="/Assets/card3.png"
      />
      <Card
        heading="Collaborate and share calls with your teammates"
        subheading="Share entire calls or snippets with your teammates to collaborate on deals. Give and receive feedback from your manager or peers."
        img="/Assets/AccountCards/card3.png"
      />
      <InvertCard
        heading="Sentiment insights on deals, synced with CRM"
        subheading="Get an overall view of each deal - spot trends in engagement and excitement levels and act in time. Every call syncs with your CRM so that your data is up to date."
        img="/Assets/AccountCards/card4.png"
      />
      <Card
        heading="Transform your decks and demos with engagement metrics"
        subheading="Get visibility into what slides and demo screens are engaging your prospects the most (and least). Tell a compelling story by improving your collateral and increase your odds of the next meeting."
        img="/Assets/AccountCards/card5.png"
      />
    </div>
  )
}

export default Accountcards
