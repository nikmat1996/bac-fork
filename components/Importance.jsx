import React from 'react'
import Image from 'next/image'
import importance from '../assets/gifs/importance.gif'
import cardImg from '../assets/images/card.png'
import moodMagic from '../assets/images/moodMagic.jpeg'
import teamSpirit from '../assets/images/teamSpirit.jpeg'
import brainGym from '../assets/images/brainGym.jpeg'
import confidenceFireworks from '../assets/images/confidenceFireworks.jpeg'
import fitnessFiesta from '../assets/images/fitnessFiesta.jpeg'
import championsClassroom from '../assets/images/championsClassroom.jpeg'
import stressSmash from '../assets/images/stressSmash.jpeg'
import friendzyVibes from '../assets/images/friendzyVibes.jpeg'
// import moodMagic from '../assets/images/moodMagic.jpeg'
import { ImportanceCarousel } from './ImportanceCarousel'
// /Users/nm/Documents/code/proj/build-a-champ/assets/images/card.png

const importanceText = {
  h2: 'Importance of sports',
  cards: [
    {
      h3: 'Mood Magic 🌟',
      p: 'Sports are like a happiness potion—splash in some action, stir in some excitement, and voila! Watch the blues wave goodbye faster than a sprinter on track day. They pump up those smile-inducing endorphins and knock stress out of the park.',
      img: moodMagic
    },
    {
      h3: 'Team Spirit Extravaganza 🎉',
      p: "Imagine sports as teamwork bootcamp. Here, ‘teamwork’ isn’t just a buzzword; it’s about passing the ball, sharing high-fives, and sometimes, even sharing victory snacks. It's where future besties meet, and parents get to snag cool action shots of their champs!",
      img: teamSpirit
    },
    {
      h3: 'Brain Gym 🧠💪',
      p: "Who says workouts are just for bodies? Sports sharpen your brain too! They jazz up your reaction times and buff up your problem-solving skills. Think of it as a mental circuit training that preps you to ace those tricky school tests and real-world puzzles.",
      img: brainGym
    },
    {
      h3: "Confidence Fireworks 🎆",
      p: "Every score and goal is a confidence booster rocket, launching self-esteem to new heights. Sports show you that yes, you can shoot, score, and even soar beyond the stars with persistence and courage.",
      img: confidenceFireworks
    },
    {
      h3: "Fitness Fiesta 🏋️‍♂️",
      p: "Get ready to flex those muscles and flaunt that fitness! Engaging in sports turns you into the healthiest version of yourself—faster, stronger, and ready to zoom past any laziness. Plus, sweating it out has never been more exhilarating!",
      img: fitnessFiesta
    },
    {
      h3: "Friend-zy Vibes 🎈",
      p: "Sports are the ultimate social network, minus the screens. They’re about fist bumps, teamwork, and friendships that could last a lifetime. It's the perfect place for kids to mingle and parents to kindle new friendships with some fan cheering on the side.",
      img: championsClassroom
    },
    {
      h3: "Stress Smash 🎾",
      p: "Feeling wound up? Sports are your go-to stress smashers. Nothing beats the thrill of the game in melting away worries. It’s all about the rush, the plays, and the sheer joy of the game. Why stress when you can press play on play?",
      img: stressSmash
    },
    {
      h3: "Champion’s Classroom 🏆",
      p: "Winning is awesome, but sports offer more than just trophies. They’re about learning the ropes of both triumph and loss. It’s where you learn to play fair, swing back from setbacks, and wear both victory and defeat with pride, all invaluable lessons off the field.",
      img: friendzyVibes
    }
  ]
}

const Importance = () => {
  return (
    <section className='px-[15px]  py-[44px] md:pt-[130px] mt-[19px] lg:px-0' id='importance'>
      <div className='mb-5 flex items-center justify-center md:mb-14 gap-x-3'>
        <h2 className='text-[25px] font-bold leading-[38px]  md:text-[50px] md:leading-[57px] '>
          {importanceText.h2}
        </h2>
        <Image
          alt='gif image'
          src={importance}
          className='h-[43px] w-[43px] rotate-90 md:h-[79px] md:w-[79px]'
        />
      </div>
      <div className='mx-auto w-full max-w-[1303px]  px-0 md:px-20'>
        <ImportanceCarousel cardArr={importanceText.cards} />
      </div>
      {/* after carousal */}
    </section>
  )
}

export default Importance
