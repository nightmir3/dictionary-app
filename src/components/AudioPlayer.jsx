import React from 'react'
import { HiPlay } from 'react-icons/hi2'

function AudioPlayer ({ audioUrl }) {
  const audioRef = React.useRef()
  const [audioIsPlaying, setAudioIsPlaying] = React.useState(false)

  console.log(audioUrl)
  return (
    <div>
      <button
        disabled={!audioUrl}
        className={`${!audioUrl
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'text-purple-600 bg-purple-200 active:translate-y-0.5'} 
                     relative flex p-4 aspect-square rounded-[50%]`}
        title={`${!audioUrl ? 'No audio available' : `Source: ${audioUrl}`}`}
        onClick={() => {
          setAudioIsPlaying(true)
          audioRef.current.play()
        }}
      >
        <HiPlay className='text-md transition-none' />
        {/* animate outline when playing */
          audioIsPlaying &&
            <div className='h-full w-full border-purple-600 border-4 aspect-square rounded-[50%] inset-0 animate-ping absolute' />
        }
      </button>
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setAudioIsPlaying(false)}
      />
    </div>
  )
}

export default AudioPlayer
