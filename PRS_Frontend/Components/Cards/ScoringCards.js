import React from 'react'
import Card from './Card/Card'
import InvertCard from './Card/InvertCard'
const Scoringcards = () => {
  return (
    <div>
      <Card
        heading="Measure and track meeting performance with Sybill Score
"
        subheading="Sybill Score serves as a single metric for the quality of conversation in each call that you or your team takes. Improve your prospect’s engagement and interaction during the deal by improving on the Sybill Score over time."
        img="/Assets/ScoringCards/card1.png"
      />
      <InvertCard
        heading="Study your best and worst calls to identify winning patterns
"
        subheading="Sybill shows the best and the worst calls taken over any given period of time, so that you know which calls you need to review manually to identify winning behaviors. Replicate these behaviors across your team to lift their game at once."
        img="/Assets/ScoringCards/card2.png"
      />
      <Card
        heading="Improve the slides that suck and the demo section that turns people off"
        subheading="Use reports on the aggregate engagement and interactivity metrics across your slides to identify the ones that are poor and improve them or switch them out. Get more prospects to move further in the funnel with more effective demos and presentations."
        img="/Assets/ScoringCards/card3.png"
      />
      <InvertCard
        heading="Learn from your team's performances"
        subheading="Identify the winning behaviors from your team and replicate them to improve your chances of winning more deals. Compare across metrics of engagement, interactivity, emotional responses and conversation stats like talk ratios, monologue lengths and filler word rates. 
"
        img="/Assets/ScoringCards/card4.png"
      />
      <Card
        heading="Share your calls for collaboration and feedback"
        subheading="Share your calls with your prospects for alignment, or with your team for collaboration and feedback. Share small snippets to celebrate wins or to share product feedback, or entire video and transcript to allow your team to rewatch in full."
        img="/Assets/ScoringCards/card5.png"
      />
    </div>
  )
}

export default Scoringcards
