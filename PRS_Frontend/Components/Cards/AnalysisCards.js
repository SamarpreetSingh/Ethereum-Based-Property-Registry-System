import React from 'react'
import Card from './Card/Card'
import InvertCard from './Card/InvertCard'
const Analysiscards = () => {
  return (
    <div>
      <Card
        heading="Get a read on people's engagement levels in each part of your call
"
        subheading="Track each participant’s level of engagement throughout the call, along with what specifically got them engaged or disengaged.  Even if you can’t see someone’s video feed, Sybill can.   
"
        img="/Assets/AnalysisCards/card1.png"
      />
      <InvertCard
        heading="Be in tune with what your prospects like"
        subheading="Sybill shows the top moments that got each of your prospects excited, so that you can follow-up with them on what matters most to them. Create a delightful experience for your prospects by always being in tune with their needs."
        img="/Assets/AnalysisCards/card2.png"
      />
      <Card
        heading="Quantify buying intent and rapport building"
        subheading="Dive into specific moments that got your prospect smiling, nodding or taking notes to get to a deeper understanding of their buying intent and the strength of your rapport with them."
        img="/Assets/AnalysisCards/card3.png"
      />
      <InvertCard
        heading="Track a prospect's interest through the course of the deal"
        subheading="Look at trends of engagement and excitement, as well as all the questions and moments of excitement for a prospect throughout the deal. Get a holistic picture of their intent and spot any patterns that might indicate a fall off before it's too late. "
        img="/Assets/AnalysisCards/card4.png"
      />
      <Card
        heading="Improve your slide deck and demo"
        subheading="Look at trends of engagement and excitement, questions asked and pain points mentioned for a prospect throughout the deal. Get a holistic picture of their intent and spot any patterns that might indicate a fall off before it's too late."
        img="/Assets/AnalysisCards/card5.png"
      />
    </div>
  )
}

export default Analysiscards
