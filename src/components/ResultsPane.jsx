import React from 'react'
import { HiPlay, HiChevronRight } from 'react-icons/hi2'

function ResultsPane () {
  return (
    <div className='flex flex-col gap-5'>
      <main className='flex justify-between items-center'>
        <div>
          <h1
            className='text-4xl font-bold mb-1'
          > keyboard
          </h1>
          <p
            className='text-purple-600 text-xl'
          >/'ki:bo.d/
          </p>
        </div>
        <div className='bg-gray-200 p-4 aspect-square rounded-[50%] text-purple-600 bg-purple-200'>
          <HiPlay className='text-2xl' />
        </div>
      </main>
      {/* definitions */}
      <section className='flex flex-col gap-4'>
        <h2
          className='flex gap-4 text-xl italic w-full items-center'
        > noun
          <span className='h-0.5 bg-gray-200 w-full' />
        </h2>
        <h3 className='text-md text-gray-500'>Meaning</h3>
        <dl
          className='flex flex-col gap-4
          [&>dd]:before:content-["•"]
          [&>dd]:before:text-purple-600 [&>dd]:before:text-4xl [&>dd]:before:pt-[-10px]'
        >
          <dd className='flex gap-4'>(etc.) A set of keys used to operate a typewriter, computer etc.
          </dd>
          <dd className='flex gap-4'>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.
          </dd>
          <dd className='flex gap-4'>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.
          </dd>
        </dl>
        <h3 className='text-md text-gray-500'>Synonyms <span className='ml-5 text-purple-600 bold'>electronic keyboard</span></h3>
      </section>
      <section className='flex flex-col gap-4'>
        <h2
          className='flex gap-4 text-xl italic w-full items-center'
        > verb
          <span className='h-0.5 bg-gray-200 w-full' />
        </h2>
        <h3 className='text-md text-gray-500'>Meaning</h3>
        <dl className='flex flex-col gap-4 [&>p]:before:content-[""]
          [&>dd]:before:content-["▶️"]
          [&>dd]:before:text-purple-600'
        >
          <dd className='flex gap-4'>
            To type on a computer keyboard.
          </dd>
          <p className='flex gap-6'>"Keyboarding is the part of this job I hate the most."</p>
        </dl>
      </section>
      <section>
        <p>Source <span>https://en.wiktionary.org/wiki/keyboard</span></p>
      </section>
    </div>

  )
}

export default ResultsPane
