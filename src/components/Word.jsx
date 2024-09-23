import React from 'react'

export default function Word({word, guessedLetters}) {
  const lineBreaks = [];

  const calcLineBreaks = () => {
    let letterCount = 0;
    word.split(' ').forEach( part => {
      console.log(letterCount)
      if(letterCount + part.length > 10 && letterCount > 0) {
        lineBreaks.push(
          lineBreaks.reduce( (sum, currentValue) => sum+currentValue, 0 )
          + letterCount
        )
      } else {
        letterCount += letterCount>0 ? part.length+1 : part.length;
      }
    });

  }
  calcLineBreaks()
  console.log("linebreak", lineBreaks)


  const WordLetter = ({letter, index}) => {
    const guessed = guessedLetters.includes(letter);
    if(letter === ' ') { 
      if( lineBreaks.includes(index) ) { return <div className='line-break'></div> }
      else { return <div className='spacebar'></div>}
    } 
    else {
    return  (
      <div className={`word-letter ${guessed ? '':'unguessed'}`}>
        { guessed ? letter : '' }
      </div> 
    )
  }
  }

  return (
    <div className="word-container">
        <div className="word">
              {
                word.split('').map( (letter, index) => <WordLetter letter={letter} index={index}/>)
              }
        </div>
    </div>
  )
}
