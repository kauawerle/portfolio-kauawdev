import { repositoriesProps } from '@/interfaces/repositoriesProps'
import axios from 'axios'
import { useEffect, useState } from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const GitHubRepos = () => {
  const [repos, setRepos] = useState([])

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  }

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/kauawerle/repos',
        )
        console.log(response)
        setRepos(response.data)
      } catch (error: any) {
        console.error('Erro ao buscar repositórios do GitHub:', error)
      }
    }

    fetchRepos()
  }, [])

  return (
    <section
      id="repositories"
      className="h-auto bg-background drop-shadow-md lg:h-auto"
    >
      <div className="flex w-full flex-col items-center justify-center py-8">
        <h3 className="mb-[5rem] mt-[5rem] px-8 text-left text-5xl text-text lg:p-0">
          Repositories Github
        </h3>
        <AliceCarousel
          responsive={responsive}
          autoPlay
          autoPlayInterval={2000}
          disableButtonsControls
          mouseTracking
          disableDotsControls
        >
          {repos.map((repo: repositoriesProps) => (
            <div
              className="
              flex 
              h-[214px] 
              w-[70%] 
              flex-col 
              items-center 
              justify-center 
              rounded-md 
              bg-[#0B0D3D]
              shadow-md
              shadow-background
              hover:bg-[#0F1040]"
              key={repo.id}
            >
              <a href={repo.html_url} target="_blank">
                <div className="flex flex-col items-center justify-center py-10">
                  <strong className="text-xl text-text">{repo.name}</strong>
                  <span className="max-w-[80%] text-center text-text">
                    {repo.description}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </section>
  )
}

export default GitHubRepos
