import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/DreamHire HomePage.jpg',
      title: 'DreamHire Website',
      tags: ['MERN', 'Development'],
      projectLink: 'https://dreamhiredeploy.onrender.com/'
    },
    {
      imgSrc: '/images/SocialX Home Image.jpg',
      title: 'SocialeX-Post & Chat',
      tags: ['MERN', 'Socket.IO'],
      projectLink: 'https://socialex-social-media.onrender.com/landing'
    },
    {
      imgSrc: '/images/Portfolio_Homepage.jpg',
      title: 'Portfolio Website',
      tags: ['Development', 'Projects'],
      projectLink: '#home'
    },
    
    {
      imgSrc: '/images/Netflix Homepage.jpg',
      title: 'Netflix-(Gemini)',
      tags: ['API', 'Development'],
      projectLink: 'https://netflix-gemini-coral.vercel.app/'
    },
    {
      imgSrc: '/images/BubbleGame HomePage.jpg',
      title: 'Bubble Game',
      tags: ['Web-design', 'Javascript'],
      projectLink: 'https://harsh-keshari.github.io/Bubble-Game/'
    },
    {
      imgSrc: '/images/Calculator HomePage.jpg',
      title: 'Calculator',
      tags: ['Web-design', 'Javascript'],
      projectLink: 'https://harsh-keshari.github.io/Calculator/'
    },
  ];

const Work = () => {
  return (
    <section 
    id="work"
    className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
