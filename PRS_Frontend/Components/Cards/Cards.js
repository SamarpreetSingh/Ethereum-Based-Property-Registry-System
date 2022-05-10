import React from 'react'
import Card from './Card/Card'
import InvertCard from './Card/InvertCard'
const Cards = (props) => {
  return (
    <div>
      <Card
        heading="Understand your prospects' needs with engagement and sentiment data"
        subheading="Review each Zoom call to figure out who was most engaged and who zoned out. Structure your deal based on what triggered positive sentiment in the decision maker and what turned them off."
        img="/Assets/card1.png"
      />
      <InvertCard
        heading="All your deals in one place, with deep sentiment insights"
        subheading="Manage your deals in Sybill. Track the prospects that are losing interest over time. Take action before it's too late."
        img="/Assets/card2.png"
      />
      <Card
        heading="No more painful note taking"
        subheading="Review your calls with automatically captured next steps, questions and pain points synced with your CRM."
        img="/Assets/card3.png"
      />
      <InvertCard
        heading="Use data to transform your slide deck and demos"
        subheading="Get data on what talk tracks resonate with your audience. Radically improve your collateral based on what works."
        img="/Assets/card4.png"
      />
      <Card
        heading="Coach yourself and your team on winning behaviors."
        subheading="Get visibility into how you and your team are doing. Use metrics on mirroring, rapport building and eye contact to improve your sales conversations."
        img="/Assets/card5.png"
      />
    </div>
  )
}

export default Cards
