import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export const Quote = ({ quote, author }) => {

    return (
        <blockquote>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <h1 className='quote'>{quote}</h1>
            <FontAwesomeIcon icon={faQuoteRight} />
            <h3 className='author'>- {author}</h3>
        </blockquote>
    )
}