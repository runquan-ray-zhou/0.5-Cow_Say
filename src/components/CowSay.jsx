import { say, PTERODACTYL, OCTOPUS, WHALE, TURTLE, TURKEY, STEGOSAURUS, SQUIRREL, SQUID, SPIDERCOW, SNOOPY, SHEEP, SEAHORSE, OWL, NYAN, MOOSE, MULE, MEOW, LOBSTER, LAMB, LAMB2, KITTY, KITTEN, JELLYFISH, IWASHI, HYPNO, HOMER, HIYOKO, HIYA, HEDGEHOG, ELEPHANT2, DRAGON, DOLPHIN, CHARIZARDVICE, CAT2, CAT, BEES, BEARFACE, ARMADILLO} from 'cowsay';
import { useState } from 'react';

const array = [PTERODACTYL, OCTOPUS, WHALE, TURTLE, TURKEY, STEGOSAURUS, SQUIRREL, SQUID, SPIDERCOW, SNOOPY, SHEEP, SEAHORSE, OWL, NYAN, MOOSE, MULE, MEOW, LOBSTER, LAMB, LAMB2, KITTY, KITTEN, JELLYFISH, IWASHI, HYPNO, HOMER, HIYOKO, HIYA, HEDGEHOG, ELEPHANT2, DRAGON, DOLPHIN, CHARIZARDVICE, CAT2, CAT, BEES, BEARFACE, ARMADILLO]

function CowGreeter() {

const [character, setCharacter] = useState(null)

function handleCharacterChange() {
  setCharacter(array[Math.round(Math.random() * array.length)])
}
  
  const char = say({
    text: 'Find your spirit animal!',
    cow: character
  }).replaceAll("\n", "<br/>").replaceAll(" ", "&nbsp")

    return (

      <div>
        <input onClick={handleCharacterChange} type="button" value="Click Me!"/>
        <div dangerouslySetInnerHTML={{__html: `<div>${char}</div>` }} />
      </div>

    )

}

export default CowGreeter