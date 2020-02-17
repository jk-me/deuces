import React from 'react'

const About = props =>{
  return(
    <div className='About'>
      <h1> Deuces </h1>
      <p> Also known as Big Two, or Chinese Poker, Deuces is a popular multiplayer card game. It is a shedding type card game, in which players are dealt a hand (usually 13 cards for 4 players) and take turns making valid plays. The winner is determined as the first person to empty their hand.
      </p>

      <p>
        Typically this is played with a 52-card deck passed out into hands of 13, for 4 people or for two games between 2 people.
      </p>

      <p>Cards are played as combinations resembling poker hands. Each turn must have the same number of cards as the previous turn, unless the previous player opts to pass their turn. (Any valid combination of cards can then be played.)
      </p>

      <ul>
        <li>Card values rank from 3-King, Ace and then 2, with Deuces being the highest value. </li>
        <li>Card suits rank from lowest to highest as: Diamonds, Clubs, Hearts, and Spades.</li>
        <li>Therefore the lowest value card is the 3 of Diamonds, and the highest value card is the 2 of Spades.</li>
        <li>The first player is whoever has the lowest card currently drawn.</li>
      </ul>

      <h3>
        Valid play combinations and their rankings are as follows:
        (Suit is always considered in ranking.)
      </h3>

      <ul>
        <li>1 card</li>
        <li>2 cards: Pairs - pair with spade is ranked higher for two pairs of the same number value</li>
        <li>3 cards: Three of a kind (same number value only)</li>
        <li>4 cards: Four of a kind (same number value only)</li>
        <li>5 cards: Five card combinations - in order of lowest to highest value, so any full house will beat any regular flush
          <ul>
            <li>
              Straight/Snake: 5 cards in a sequence (but not of the same suit). Rank determined by comparing the highest value card in each straight.
            </li>
            <li>
              Flush: 5 cards of the same suit (but not in a sequence). Rank determined by comparing the highest value card in each flush.
            </li>
            <li>Full house: A three-of-a-kind set plus a pair. Rank determined by the value of the triple, regardless of the value of the pair.</li>
            <li>Bomb: A four-of-a-kind set plus any 5th card. Rank determined by value of the set.
            </li>
            <li>
              Straight flush: Five cards in sequence of the same suit. Ranked by the highest value card.
            </li>
          </ul>
        </li>
      </ul>

    </div>
  )
}

export default About
