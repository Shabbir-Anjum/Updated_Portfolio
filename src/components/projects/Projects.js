import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <ProjectsCard
          title="Dogy App | Gemini AI Heckathon"
          des="Dogy Walk Generator, innovating personalized dog walking routes for varied energy levels and safety concerns. Transformed daily walks for dog owners, ensuring both creativity and safety."
          src={projectOne}
          link= 'https://dogy-app.vercel.app/'
          git='https://github.com/Shabbir-Anjum'
        />

        <ProjectsCard
          title="E-commerce Website"
          des=" Check out my new online store! I made it to practice, so you can easily browse and buy cool clothes!"
          src={projectTwo}
          link= 'https://shabbir-shop.vercel.app/'
          git='https://github.com/Shabbir-Anjum'
        />

        <ProjectsCard
          title="Food Website"
          des=" I built a responsive Food Web using simple codes in HTML, styled it with easy-to-use Tailwind CSS, and made it interactive using JavaScript and React. With Framer Motion, I added fun animations to make the website more lively."
          src={projectThree}
          link= 'https://food-website-livid-nine.vercel.app/'
          git=''
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          link= 'https://youtube-video-transcript.streamlit.app/'
          git='https://github.com/Shabbir-Anjum'
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
          link= 'https://devpost.com/software/databuddy'
          git='https://github.com/Shabbir-Anjum'
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          link= 'https://voice-assistant-gpt-4o-hackthon.vercel.app/'
          git='https://github.com/Shabbir-Anjum'
        />
      </div>
    </section>
  );
}

export default Projects