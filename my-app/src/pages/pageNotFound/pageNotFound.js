import React from 'react'
import './pageNotFound.css'
import NotFoundImage from './notFoundImage.jpg'

function pageNotFound(props) {
    return (
     <div className='page-not-found'>
        <h1> Ooops... </h1>
        <p>Página não encontrada</p>
        <img src={NotFoundImage} />
     </div>
    )
  }
 
  export default pageNotFound