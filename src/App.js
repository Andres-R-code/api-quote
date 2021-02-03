import React, { useState } from 'react'
import dataBase from './quotes.json'
import { renderNumber } from './animations/renderNumber'
import { renderColors } from './animations/renderColors'
import { QuotesBox } from './components/QuotesBox'


function App() {
  const
    serial_quotes = dataBase.quotes,
    index = serial_quotes.length,
    render_quotes = renderNumber(index)

  const
    [quote, setQuote] = useState(serial_quotes[render_quotes]),
    [color, setColor] = useState(renderColors),

    handleClick = () => {
      const
        new_render_quotes = renderNumber(index)

      setQuote(serial_quotes[new_render_quotes])
      setColor(renderColors())
    }

  return (
    <div className='App' style={{ '--current-color': `${color}` }}>
      <QuotesBox
        quote={quote.quote}
        author={quote.author}
        onQuoteChange={handleClick}
      />
    </div>
  )
}


export default App
