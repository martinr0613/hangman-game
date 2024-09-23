import React from 'react'

export default function Keyboard(props) {

  const {guessedLetters, setGuessedLetters} = props;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleClick = (letter) => {
    if(guessedLetters.includes(letter)) return
    setGuessedLetters([
      ...guessedLetters,
      letter
    ]);
  }

  return (
    <div className='keyboard-container'>
      <div className="keyboard">

        {alphabet.map(letter => 
          <div className={`keyboard-letter ${guessedLetters.includes(letter) ? 'guessed':'unguessed'}`}
               onClick={()=>handleClick(letter)}>
            {letter}
            </div>
        )}

      </div>
    </div>
  )
}
