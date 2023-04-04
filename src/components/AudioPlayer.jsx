import React from 'react'
import { HiPlay } from 'react-icons/hi2'

function AudioPlayer ({ audioUrl }) {
  const audioRef = React.useRef()
  console.log(audioUrl)
  return (
    <div>
      <button
        disabled={!audioUrl}
        className={`${!audioUrl
                        ? 'bg-gray-200 text-gray-600'
                        : 'text-purple-600 bg-purple-200'} 
                    p-4 aspect-square rounded-[50%] `}
        onClick={() => audioRef.current.play()}
      >
        <HiPlay className='text-md' />
      </button>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}

export default AudioPlayer
