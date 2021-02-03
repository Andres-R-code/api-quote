import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Quote } from './Quote'

export const QuotesBox = ({ quote, author, onQuoteChange }) => {

    return (
        <div className='quoteBox'>
            <Quote quote={quote} author={author} />
            <div className='btns'>
                <a
                    className='btn tweet'
                    href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <button className='btn' onClick={onQuoteChange}>
                    New Quote
                </button>
            </div>
        </div>
    )
}