import React from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { US, GB } from 'country-flag-icons/react/3x2'
import RelatedWords from './RelatedDefinitions'
import AudioPlayer from './AudioPlayer'

function ResultsPane ({ res, languageVariant }) {
  const { word, phonetics, meanings, sourceUrls } = res
  const phoneticsAvailable = phonetics.length > 0

  // The main reason to filter only the phonetics for UK and US is because I need to flag the variants and some entries might be empty (only text or only audio)
  const getPhonetics = (phonetics) => {
    return res.phonetics
      .filter((phonetic) => phonetic.audio !== '')
      .map((phonetic) => {
        return {
          // Using the free Dictionary API, the only way to identify the variant is by checking the audio URL
          variant: phonetic.audio?.match(/-uk.mp3$/)
            ? 'UK'
            : phonetic.audio?.match(/-us.mp3$/) ? 'US' : '',
          text: phonetic.text,
          audio: phonetic.audio
        }
      })
  }

  const phoneticsArray = phoneticsAvailable && getPhonetics(phonetics)
  console.log(phoneticsArray)

  return (
    <div className='flex flex-col gap-6'>
      <main className='flex items-center justify-between'>
        <div className='flex flex-col md:gap-2'>
          <h1 className='mb-1 text-3xl font-bold tracking-wide md:text-5xl'>
            {' '}
            {word}
          </h1>
          {/* Pronunciation */}
          {!phoneticsAvailable
            ? (
              <p className='font-sans text-base md:text-lg text-purple-400 tracking-normal'>
                /No pronunciation available/
              </p>
              )
            : (
              <p className='font-sans text-lg tracking-wider text-purple-600 md:text-2xl'>
                {languageVariant === 'UK'
                  ? <GB className='inline h-3' />
                  : <US className='inline h-3' />}
                {' '}
                {
                  // If there is no specific phonetic transcription (phonetic.text) and there is no default phonetic transcription (res.phonetic), then display the message below
                  phoneticsArray.find((phonetic) => phonetic.variant === languageVariant)
                    ?.text || res.phonetic || <span className='text-base md:text-lg text-purple-400 tracking-normal'>/No pronunciation available/</span>
                }
              </p>
              )}
        </div>
        {/* Audio Player */}
        {phoneticsAvailable && (
          <AudioPlayer
            audioUrl={
            phoneticsArray.find((phonetic) => phonetic.variant === languageVariant)?.audio || ''
          }
          />
        )}
      </main>

      {/* meanings (partsOfSpeech, like verb, noun, adjective, adverb, etc.) */}
      {/* TODO: make meanings collapsible */}
      {meanings.map((meaning, index) => {
        return (
          <section
            className='flex flex-col gap-6'
            key={`${meaning.partOfSpeech}-${index}`}
          >
            <h2 className='flex items-center w-full gap-4 italic font-bold md:text-lg'>
              {meaning.partOfSpeech}
              <span className='h-0.5 bg-gray-200 w-full' />
            </h2>
            <h3 className='text-sm text-gray-500 md:text-base'>Meaning</h3>
            <dl
              className='flex flex-col gap-4 text-sm md:text-base
                [&>dd]:before:text-purple-600
                [&>dd]:before:content-["•"]
                [&>dd]:before:text-3xl
                [&>dd]:before:leading-6'
            >
              {meaning.definitions.map((definition, index) => {
                return (
                  <React.Fragment key={index}>
                    <dd className='flex gap-4 leading-6'>
                      {definition.definition}
                    </dd>
                    {definition.example && (
                      <p className='flex gap-4 leading-6 ml-7 mt-[-0.75rem] font-bold'>
                        Example:{' '}
                        <span className='italic text-gray-500'>
                          {definition.example}
                        </span>
                      </p>
                    )}
                  </React.Fragment>
                )
              })}
            </dl>

            {meaning.synonyms.length > 0 && (
              <RelatedWords heading='Synonyms' wordList={meaning.synonyms} />
            )}
            {meaning.antonyms.length > 0 && (
              <RelatedWords heading='Antonyms' wordList={meaning.antonyms} />
            )}
          </section>
        )
      })}

      <section className='flex flex-col w-full gap-2 pt-6 border-t-2 border-gray-200'>
        <h3 className='text-sm text-gray-500 md:text-base'>Sources</h3>
        {sourceUrls?.map((url, index) => {
          return (
            <a
              key={index}
              className='text-xs leading-6 underline'
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              {url}
              <HiExternalLink className='inline ml-2 text-lg text-gray-500 align-text-bottom' />
            </a>
          )
        })}
      </section>
    </div>
  )
}

export default ResultsPane
