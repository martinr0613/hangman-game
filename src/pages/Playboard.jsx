import React, { useEffect, useState } from 'react'
import Word from '../components/Word';
import ProgressBar from '../components/ProgressBar'
import Keyboard from '../components/Keyboard';
import Layout from '../layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Playboard({}) {

  const {state} = useLocation();
  const navigate = useNavigate();  
  console.log(state)

  useEffect(() => {
    if(!state) {
      navigate("/");
    }
  }, []);

  const {category, word, wordsArray} = state;

  const [guessedLetters, setGuessedLetters] = useState([]);
  const incorrectGuesses = guessedLetters.filter(letter => !word.includes(letter)).length;
  const correctGuesses = word.replaceAll(' ','').split('').filter(letter => guessedLetters.includes(letter)).length;
  const isWordGuessed = correctGuesses >= word.replaceAll(' ','').length
  const maxGuesses = 11;
  const isGameLost = incorrectGuesses >= maxGuesses

  const playAgain = () => {
    const newWord =  wordsArray[Math.floor(Math.random()*wordsArray.length)];
    setGuessedLetters([])
    navigate('/playboard',
    { state: { category, word: newWord.toUpperCase(), wordsArray }}
    );
  }

  const homepage = () => {
    navigate('/');
  }

  return (
    <Layout>
        <header>
            <span>{category}</span>
            <ProgressBar progress={100 - incorrectGuesses * (100 / maxGuesses)}/>
        </header>
        <Word word={word} guessedLetters={guessedLetters}/>
        <Keyboard 
          guessedLetters={guessedLetters} 
          setGuessedLetters={setGuessedLetters}
        />
        {
          isWordGuessed ? 
          <div className="playboard-modal menu center">
            <div>
              <h1> WORD GUESSED </h1>
            </div>
            <button className="btn-primary" onClick={()=>playAgain()}>PLAY AGAIN</button>
          </div> 
          : 
          <></> 
        }
        {isGameLost ? 
        <div className="playboard-modal menu center">
          <div>
            <h1> YOU LOST </h1>
          </div>
          <button className="btn-primary" onClick={()=>homepage()}>HOME</button>
        </div> 
        : 
        <></> }
  
    </Layout>
  )
}
