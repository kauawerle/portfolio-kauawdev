import Image from "next/image";

import { projectProps } from "@/interfaces/projectProps";

import certificata from "@/images/projects/certificata.png";
import digitaldoc from "@/images/projects/digitaldoc_logo.png";
import eatos from "@/images/projects/eatos.png";
import optimize from "@/images/projects/optimize.jpg";
import profissional from "@/images/projects/profissionalAAA.png";
import vipus from "@/images/projects/vipus.png";

const projects: projectProps[] = [
  {
    name: 'Vipus',
    image: vipus,
    description:
      'I built Vipus using Ionic, Angular, TypeScript, and Bootstrap in the year 2019.',
    link: 'https://www.instagram.com/vipusoficial/',
  },
  {
    name: 'Digitaldoc',
    image: digitaldoc,
    description:
      'I work and evolved the Digitaldoc using Angular, bootstrap and C#. In the year 2021 to 2022',
    link: 'https://digitaldoc.com.br',
  },
  {
    name: 'Eatos',
    image: eatos,
    description:
      'I work with the Eatos using Angular, bootstrap and C#. In the year 2021 to 2022',
    link: 'https://publicacoesmunicipais.com.br/eatos/',
  },
  {
    name: 'Certificata',
    image: certificata,
    description:
      'I work with the certificata using VueJs and typescript. In the year 2022',
    link: 'https://certificata.com.br/',
  },
  {
    name: 'Optimize',
    image: optimize,
    description:
      'I built a Optimize using React, Next, Typescript, Node and Tailwind in the year 2023',
    link: 'https://app.optimize.deals',
  },
  {
    name: 'ProfissionalAAA',
    image: profissional,
    description: 'Portfolio and course of Profissional AAA in the year 2023',
    link: 'https://www.gustavomaciel.xyz',
  },
]

export default function GridComponents() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 mt-[1.5rem]">
        {projects.map((pr) => (
          <div
            key={pr.name}
            className="
            text-white
            lg:mx-12
            mt-8
            text-2xl
            p-12
            drop-shadow-md
            flex
            flex-col
            w-full
            lg:w-[354px]
            bg-[#0B0D3D]
            rounded-md
            text-left
            hover:bg-[#0F1040]
            justify-center
            items-start">
            <Image
              className="mb-6 rounded-md"
              src={pr.image}
              width={60}
              height={60}
              alt="Imagem do projeto"
            />
            <strong className="mb-6">{pr.name}</strong>
            <span className="text-lg mb-6">{pr.description}</span>
            <div className="flex text-lg justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <a href={pr.link} target="_blank" className="ml-3">
                {pr.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
