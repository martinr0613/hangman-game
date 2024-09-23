import React, { useState } from 'react'
import Layout from '../layout/Layout'
import data from '../data'
import { useNavigate } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';

export default function Home() {

  const [categoriesView, setCategoriesView] = useState(false)

  const navigate = useNavigate();

  const startGame = (category) => {
    const wordsArray = data[category];
    const word = wordsArray[Math.floor(Math.random()*wordsArray.length)];
    navigate('/playboard',
    { state: { category, word: word.toUpperCase(), wordsArray }}
    );
  }

  return (
    <Layout>
        {
          categoriesView 
          ? 
          <>
            <div className="categories-header">
                <div className='back-icon' onClick={()=>setCategoriesView(false)}><ReplyIcon fontSize='large'/></div>
                <h1 className="categories-title">Pick a Category</h1>
            </div>
            <div className="categories-menu center">
              { Object.keys(data).map( category =>
                  <div className='category-btn linear' onClick={()=>startGame(category)}> {category} </div> 
                )}
            </div>
          </>
          : 
          <div className="menu center linear">
            <div className="home-title">Hangman Game</div>
            <button onClick={()=>setCategoriesView(true)} className="btn-primary">START GAME</button>
          </div>
        }
    </Layout>
  )
}
