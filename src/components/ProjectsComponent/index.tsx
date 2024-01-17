import GridComponents from "../GridComponents";

export default function ProjectsComponents() {
  return (
    <section
      id="projects"
      className="h-auto bg-background drop-shadow-md md:h-[160vh] lg:h-auto 2xl:h-[130vh]"
    >
      <div className="flex w-full flex-col items-center justify-center py-8">
        <h3 className="mt-[5rem] px-8 text-left text-5xl text-text lg:p-0">
          Projects Completed
        </h3>
        <strong className="mt-3 w-full px-8 text-left text-xl text-text lg:w-[24%] lg:p-0 lg:text-center lg:text-2xl">
          Some projects completed and experiences that i acquired
        </strong>
        <GridComponents />
      </div>
    </section>
  )
}
