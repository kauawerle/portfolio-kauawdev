import Image from 'next/image'

import darthDev from '@/images/darth-dev.png'

export default function HeroComponent({ onInput }: any) {
  return (
    <main
      className={`flex
        h-auto 
        items-center
        justify-center 
        border-b-[#080924]
        bg-[#0D0E2E] 
        bg-right-bottom 
        font-sans 
        drop-shadow-lg
        lg:h-[100vh] 
        lg:p-12`}
    >
      <div className="flex w-full max-w-none flex-col items-center justify-center p-5 lg:flex-row">
        <div className="max-w-8xl mb-5 mt-5 flex flex-col items-start justify-start text-left">
          <strong className="text-2xl text-[#22BB84] lg:text-4xl">
            Hello, my name is
          </strong>
          <h1 className="mt-4 text-5xl text-text lg:text-6xl">Kauã Werle.</h1>
          <h3 className="my-4 font-sans text-3xl text-text">
            I&apos;m Developer Web
          </h3>
          <div className="mt-5 w-full rounded-md bg-[#050505] p-5 opacity-70 lg:w-[80%] 2xl:w-[70%]">
            <p className="text-left font-sans text-xl text-[#119D0E]">
              I am a developer with a focus on both front-end and back-end,
              working in this field since 2019. The primary technologies I
              employ are React and Node...
              <br />
              PS C:\Users\www Let&apos;s continue ? Y (yes) N (no)
            </p>
            <input
              type="text"
              className="mt-5 w-full border-none bg-transparent  text-xl text-[#119D0E] outline-none placeholder:text-xl placeholder:text-[#0E890B]"
              placeholder="Insert value"
              onInput={onInput}
            />
          </div>
        </div>
        <div className='shadow-lg'>
          <Image width={1240} height={900} src={darthDev} alt="DarthDev" />
        </div>
      </div>
    </main>
  )
}
