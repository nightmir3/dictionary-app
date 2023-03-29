import React from 'react'
import { HiPlay } from 'react-icons/hi2'
import { HiExternalLink } from 'react-icons/hi'
import { US, GB } from 'country-flag-icons/react/3x2'

function ResultsPane () {
  return (
    <div className='flex flex-col gap-6'>
      <main className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <h1
            className='mb-1 text-3xl font-bold tracking-wide'
          > keyboard
          </h1>
          <p
            className='font-sans text-lg tracking-wider text-purple-600'
          ><GB className='inline h-3' /> /ˈkiːbɔːd/
          </p>
          {/* <p
            className='font-sans text-lg tracking-wider text-purple-600'
          ><US className='inline h-3' /> /ˈkiˌbɔrd/
          </p> */}
        </div>
        <div className='bg-gray-200 p-4 aspect-square rounded-[50%] text-purple-600 bg-purple-200'>
          <HiPlay className='text-md' />
        </div>
      </main>
      {/* definitions */}
      <section className='flex flex-col gap-6'>
        <h2
          className='flex items-center w-full gap-4 italic font-bold text-l'
        > noun
          <span className='h-0.5 bg-gray-200 w-full' />
        </h2>
        <h3 className='text-sm text-gray-500'>Meaning</h3>
        <dl
          className='flex flex-col gap-4
          [&>dd]:before:content-["•"]
          [&>dd]:before:text-purple-600 [&>dd]:before:text-3xl [&>dd]:before:w-5 [&>dd]:before:leading-6'
        >
          <dd className='flex gap-4 text-sm leading-6'>(etc.) A set of keys used to operate a typewriter, computer etc.
          </dd>
          <dd className='flex gap-4 text-sm leading-6'>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.
          </dd>
          <dd className='flex gap-4 text-sm leading-6'>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.
          </dd>
        </dl>
        <h3 className='text-sm text-gray-500'>Synonyms <span className='ml-5 text-purple-600 bold'>electronic keyboard</span></h3>
      </section>
      <section className='flex flex-col gap-4'>
        <h2
          className='flex items-center w-full gap-4 italic font-bold text-l'
        > verb
          <span className='h-0.5 bg-gray-200 w-full' />
        </h2>
        <h3 className='text-sm text-gray-500'>Meaning</h3>
        <dl className='flex flex-col gap-4
          [&>dd]:before:content-["•"]
          [&>dd]:before:text-purple-600 [&>dd]:before:text-3xl [&>dd]:before:w-5 [&>dd]:before:leading-6'
        >
          <dd className='flex gap-4 text-sm leading-6'>
            To type on a computer keyboard.
          </dd>
          <p className='flex gap-4 text-sm italic leading-6 text-gray-500 ml-9'>"Keyboarding is the part of this job I hate the most."</p>
        </dl>
      </section>
      <section className='flex flex-col w-full gap-2 pt-6 border-t-2 border-gray-200'>
        <h3 className='text-sm text-gray-500 '>Source</h3>
        <a
          className='text-xs leading-6 underline'
          href='https://en.wiktionary.org/wiki/keyboard' target='_blank' rel='noreferrer'
        >https://en.wiktionary.org/wiki/keyboard
          <HiExternalLink className='inline ml-2 text-lg text-gray-500 align-text-bottom' />
        </a>
      </section>
    </div>

  )
}

export default ResultsPane
