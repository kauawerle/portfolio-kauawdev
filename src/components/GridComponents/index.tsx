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
    name: "Vipus",
    image: vipus,
    description:
      "Construi a Vipus utilizando Ionic, Angular, Typescript e bootstrap ano de 2019",
    link: "https://play.google.com/store/apps/details?id=com.i9plus.store.app&hl=pt_BR&gl=US",
  },
  {
    name: "Digitaldoc",
    image: digitaldoc,
    description:
      "Trabalhei e evolui o Digitaldoc utilizando Angular, bootstrap e C#. Ano de 2021 a 2022",
    link: "https://digitaldoc.com.br",
  },
  {
    name: "Eatos",
    image: eatos,
    description:
      "Trabalhei com o Eatos utilizando Angular, bootstrap e C#. Ano de 2021 a 2022",
    link: "https://publicacoesmunicipais.com.br/eatos/",
  },
  {
    name: "Certificata",
    image: certificata,
    description:
      "Trabalhei com certificata utilizando VueJs e typescript. Ano de 2022",
    link: "https://digitaldoc.com.br/certificata/",
  },
  {
    name: "Optimize",
    image: optimize,
    description:
      "Construi a Optimize utilizando React, Next, Typescript, Node e Tailwind ano de 2023",
    link: "https://optimize.deals",
  },
  {
    name: "ProfissionalAAA",
    image: profissional,
    description: "Portfólio e curso do Profissional AAA em 2023",
    link: "https://www.gustavomaciel.xyz",
  },
];

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
