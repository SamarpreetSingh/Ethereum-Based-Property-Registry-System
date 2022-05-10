import React from 'react'
import Card from './Card/Card'
import InvertCard from './Card/InvertCard'
const Intelligencecards = () => {
  return (
    <div>
      <Card
        heading="Follow-up with automated next steps detection"
        subheading="Sybill captures the next steps, questions and answers, and pain points mentioned by the call participants, so you don't have to dig through the transcript to find them. Follow-up with the right stuff to address concerns or press upon benefits that invoked most discussion."
        img="/Assets/IntelligenceCards/card1.png"
      />
      <InvertCard
        heading="Accurate transcripts that are even better on words that matter to you"
        subheading="Sybill's transcription has high accuracy and low word error rates. The performance is even better on custom words specified by you like your name, your company's name, and your competitor’s names."
        img="/Assets/IntelligenceCards/card2.png"
      />
      <Card
        heading="Comply with your sales methodology"
        subheading="Sybill captures discussions around pricing, metrics, pain points, and authority from the transcript. Follow the sales methodology of your choice and succeed in discovery conversations."
        img="/Assets/IntelligenceCards/card3.png"
      />
      <InvertCard
        heading="All your call notes automatically sync with your CRM"
        subheading="Add the key points from each call to the relevant opportunity in the CRM as a note. Next steps, questions, pain points, and the entire transcript, along with Sybill Score and a lot more can be added to your CRM automatically after each call."
        img="/Assets/IntelligenceCards/card4.png"
      />
      <Card
        heading="Coach holistically with hard data on what is working and what isn’t"
        subheading="Compare engagement and interactivity trends along with talk ratios, monologue lengths and other metrics to spot areas of improvement for each rep. Raise the standards so that the best behaviors are emulated across the team."
        img="/Assets/IntelligenceCards/card5.png"
      />
    </div>
  )
}

export default Intelligencecards
