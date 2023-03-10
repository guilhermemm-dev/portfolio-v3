// @ts-nocheck
import React from 'react'
import coverBank from '../public/assets/projects/cover-bank.png'
import coverEtickets from '../public/assets/projects/cover-etickets.png'
import coverFlappyBird from '../public/assets/projects/cover-flappybird.png'
import coverFwc from '../public/assets/projects/cover-fwc.png'
import coverIhungry from '../public/assets/projects/cover-ihungry.png'
import coverNetflix from '../public/assets/projects/cover-netflix.jpg'
import coverShareSpot from '../public/assets/projects/cover-sharespot.png'
import coverSuperbid from '../public/assets/projects/cover-superbid.png'
import coverChat from '../public/assets/projects/demo-chat-mobile.png'
import coverDashboard from '../public/assets/projects/demo-dashboard1.png'
import coverGallery from '../public/assets/projects/demo-gallery.png'
import coverLinktree from '../public/assets/projects/demo-linktree.png'
import coverPortfolio from '../public/assets/projects/demo-portfolio1.png'
import coverPokedex from '../public/assets/projects/pokedex-mobile2.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-16'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#2A7AE2]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='Pokédex'
            backgroundImg={coverPokedex}
            projectUrl='/projects/web/pokedex'
            tech='NextJS'
          />
          <ProjectItem
            title='ChatApp'
            backgroundImg={coverChat}
            projectUrl='/projects/web/chat'
            tech='ReactJS'
          />
          <ProjectItem
            title='Dashboard'
            backgroundImg={coverDashboard}
            projectUrl='/projects/web/dashboard'
            tech='NextJS'
          />
          <ProjectItem
            title='Gallery'
            backgroundImg={coverGallery}
            projectUrl='/projects/web/gallery'
            tech='NextJS'
          />
          <ProjectItem
            title='Linktree'
            backgroundImg={coverLinktree}
            projectUrl='/projects/web/linktree'
            tech='NextJS'
          />
          <ProjectItem
            title='BeMyGuess'
            backgroundImg={coverFwc}
            projectUrl='/projects/mobile/fwc'
            tech='React Native'
          />
          <ProjectItem
            title='FlappyBird Game'
            backgroundImg={coverFlappyBird}
            projectUrl='/projects/mobile/flappybird'
            tech='React Native'
          />
          <ProjectItem
            title='OnlineBank'
            backgroundImg={coverBank}
            projectUrl='/projects/mobile/bank'
            tech='React Native'
          />
          <ProjectItem
            title='My Portfolio Website'
            backgroundImg={coverPortfolio}
            projectUrl='/projects/web/portfolio'
            tech='NextJS'
          />
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={coverNetflix}
            projectUrl='/projects/web/netflix'
            tech='NextJS'
          />
          <ProjectItem
            title='ShareSpot'
            backgroundImg={coverShareSpot}
            projectUrl='/projects/web/sharespot'
            tech='NextJS'
          />
          <ProjectItem
            title='iHungry'
            backgroundImg={coverIhungry}
            projectUrl='/projects/web/ihungry'
            tech='NextJS'
          />
          <ProjectItem
            title='Superbid'
            backgroundImg={coverSuperbid}
            projectUrl='/projects/web/superbid'
            tech='ReactJS'
          />
          <ProjectItem
            title='eTickets'
            backgroundImg={coverEtickets}
            projectUrl='/projects/web/etickets'
            tech='ReactJS'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
