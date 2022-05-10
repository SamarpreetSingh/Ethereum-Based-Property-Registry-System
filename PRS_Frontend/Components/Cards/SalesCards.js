import React from 'react'
import Card from './Card/Card'
import InvertCard from './Card/InvertCard'
const Salescards = () => {
  return (
    <div>
      <Card
        heading="Get visibility into each deal in the pipeline"
        subheading="Track every deal and the key moments of excitement or contention with the deal dashboard. Forecast better and jump in when necessary. 
"
        img="/Assets/SalesLeaderCards/card1.png"
      />
      <InvertCard
        heading="Coach with hard data on what’s working and what’s not
"
        subheading="Compare engagement and interactivity trends to spot areas of improvement for each sales rep. Track talktime, monologue lengths and filler words. Raise the standards so that the best behaviors are emulated across the team."
        img="/Assets/SalesLeaderCards/card2.png"
      />
      <Card
        heading="Measure and track meeting performance with Sybill Score"
        subheading="Sybill Score serves as a single metric for the quality of conversation in each call that you or your team takes. Improve your prospect’s engagement and interaction during the deal by improving on the Sybill Score over time.
"
        img="/Assets/SalesLeaderCards/card3.png"
      />
      <InvertCard
        heading="Get alerts on warning signs or buying signals"
        subheading="Get alerts on Slack or email whenever Sybill spots a warning sign in a deal (sharp decline in engagement level across calls or no next steps, etc.) or a buying signal (lots of excitement and high Sybill Score).
 "
        img="/Assets/SalesLeaderCards/card4.png"
      />
      <Card
        heading="Jump into deals with a quick recap of the story so far"
        subheading="Review the calls for a particular deal with quick highlights so that you’re ready to jump in within no time.
"
        img="/Assets/SalesLeaderCards/card5.png"
      />
    </div>
  )
}

export default Salescards
