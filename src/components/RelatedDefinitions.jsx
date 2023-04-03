import React from 'react'

function RelatedWords ({ heading, wordList }) {
  return (
    <div className='flex gap-3 items-start'>
      <h3 className='text-sm text-gray-500 md:text-base'>{heading}: </h3>
      <ul className='text-sm md:text-base flex gap-1 flex-wrap'>
        {wordList.map((synonym, index) => {
          return (
            <li key={index} className='text-purple-600 bold'>{synonym}
              {index < wordList.length - 1
                ? <span>,</span>
                : <span>.</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RelatedWords
