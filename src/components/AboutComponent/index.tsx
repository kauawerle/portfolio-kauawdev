import cover from '@/images/portfolio-eu.jpg';
import Image from "next/image";

export function AboutComponent() {
  return (
    <section
      id="about"
      className="bg-background bg-[url('images/background_about.svg')] bg-right-bottom bg-no-repeat  
        py-32 drop-shadow-md lg:py-24 "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            flex
            max-w-2xl
            flex-col
            items-center
            justify-center
            gap-x-8
            gap-y-16
            lg:mx-0
            lg:grid
            lg:max-w-none
            lg:grid-cols-2
            lg:items-start"
        >
          <div>
            <Image
              height={556}
              width={512}
              alt=""
              quality={100}
              src={cover}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="ml-4 lg:ml-10">
            <div className="font-sofia text-base leading-7 text-text lg:max-w-lg">
              <p className="text-primary text-left text-xl font-semibold leading-7">
                Who is
              </p>
              <h1 className="mt-2 text-left text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Kauã Werle
              </h1>
              <div className="text-md max-w-5xl text-left font-semibold text-white lg:max-w-3xl lg:text-lg">
                <p className="mt-6">
                  I began studying programming and working at the age of 15. I
                  enrolled in the computer science technical course at Mondrone
                  in 2019, and my first job followed shortly thereafter at Trend
                  Mobile, where I gained my initial insights into the field.
                </p>
                <p className="mt-8">
                  During my time at Trend Mobile, I worked with technologies
                  such as Ionic, Angular, and Bootstrap. I continued there until
                  2021, after which I transitioned to Cemapa Informática, where
                  I utilized Delphi.
                </p>
                <p className="mt-8">
                  In November 2021, I joined Digitaldoc, working with Angular,
                  VueJs, Node, and C#. I stayed there until November 2022,
                  concurrently completing my computer science technical course
                  by presenting my thesis, which incorporated new technologies
                  such as React, React Native, NodeJs, TypeScript, Postgres, and
                  Sequelize.
                </p>
                <p className="mt-8">
                  In March 2023, I commenced my Bachelor&apos;s degree in
                  Software Engineering and simultaneously undertook freelance
                  work for OptimizeDeals, employing React, Node, TypeScript, and
                  Tailwind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
