import Image from "next/image";

import darthDev from '@/images/darth-dev.png';

export default function HeroComponent({ onInput }) {
  return (
    <main
      className={`lg:p-12
        font-sans 
        lg:h-[100vh]
        h-auto 
        drop-shadow-lg 
        flex 
        justify-center 
        bg-right-bottom 
        items-center 
        bg-[#0D0E2E]`}
    >
      <div className="w-full p-5 max-w-none flex items-center justify-center flex-col lg:flex-row">
        <div className="flex mt-5 mb-5 flex-col text-center lg:text-left max-w-8xl justify-start items-start">
          <strong className="text-[#22BB84] text-4xl">Olá, meu nome é</strong>
          <h1 className="text-6xl mt-4 text-text">Kauã Werle.</h1>
          <h3 className="font-sans text-3xl my-4 text-text">
            E eu sou Desenvolvedor Web
          </h3>
          <div className="p-5 opacity-70 mt-5 rounded-md w-full lg:w-[70%] bg-[#050505]">
            <p className="font-sans text-xl text-[#119D0E] text-left">
              Sou um desenvolvedor focado em front-end e back-end estou atuando
              nessa área desde 2019. As principais tecnologias que eu uso são
              React e Node...
              <br />
              PS C:\Users\www Deseja continuar ? Y (yes) N (no)
            </p>
            <input
              type="text"
              className="w-full border-none text-[#119D0E] outline-none  mt-5 bg-transparent text-xl placeholder:text-xl placeholder:text-[#0E890B]"
              placeholder="Insira o valor"
              onInput={onInput}
            />
          </div>
        </div>
        <div>
          <Image width={1240} height={900} src={darthDev} alt="DarthDev"/>
        </div>
      </div>
    </main>
  );
}
