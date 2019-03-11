import React from 'react'

const About = props =>{
  return(
    <div className='About'>
      <h1> Deuces </h1>
      <p> Also known as Big Two, or Chinese Poker, Deuces is a popular card game of Chinese origin. It is a shedding type card game, in which players are dealt a hand and take turns making valid plays. The winner is determined as the first person to play all their cards.
      </p>
      <p>Cards are played as combinations resembling poker hands. Each turn must have the same number of cards as the previous turn, unless the previous player opts to pass their turn.
      </p>
      <p>
        <ul>
        <li>Card values rank from 3-10, Jack, Queen, King, Ace and 2, with Aces and Deuces being high. </li>
        <li>Card suits rank from lowest to highest as: diamonds, clubs, hearts, and spades.</li>
        <li>Therefore the lowest value card is the 3 of diamonds, and the highest value card is the 2 of spades.</li>
        </ul>
         The combinations and their rankings are as follows: </p>
      <ul>
        <li>Single cards</li>
        <li>Pairs (Pair with spade is ranked higher for two pairs of the same number value)</li>
        <li>Three of a kind</li>
        <li>Four of a kind</li>
        <li>Five-card hands (in order of lowest to highest value, so any full house will beat any regular flush)
          <ul>
            <li>
              Straight: Any 5 cards in a sequence (but not all of the same suit). Rank is determined by the highest value card, taking suits into account.
            </li>
            <li>
              Flush: Any 5 cards of the same suit (but not in a sequence). Rank is determined by the highest value card in each flush.
            </li>
            <li>Full house: a composite of a three-of-a-kind combination and a pair. Rank is determined by the value of the triple, regardless of the value of the pair.</li>
            <li>Four-of-a-kind + One card: Any set of 4 cards of the same rank, plus any 5th card.
            </li>
            <li>
              Straight flush: Five cards in sequence in the same suit. Ranked the same as straights, by the highest value card.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default About
