'use client'

import { useEffect, useState } from 'react';

import LinkAnim from './components/link-anim';
import TypeAnimOrder from './components/type-anim-order'

const loadedKey = 'homeoaded';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  let loaded = false;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  const setNextActive = () => {
    if(!loaded) setActiveIndex(activeIndex + 1); //check if loaded since loaded update occurs after first render where function is already called
  }

  const handleBeforeUnload = (event : Event) => {
      sessionStorage.clear();
    };

  useEffect(() => {
    if(sessionStorage.getItem(loadedKey)) loaded = true;
    if(loaded){
      setActiveIndex(99);
    }
    sessionStorage.setItem(loadedKey, "true");
    addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
 
  return (
    <main className="ml-10 mr-5 flex min-h-screen flex-col justify-items-start justify-center gap-y-4">
      <TypeAnimOrder className='text-7xl' text="hi, i'm frank!" show={true} showNext={setNextActive} noAnim={activeIndex >= 1}/>
      <div className='flex flex-col'>
        <TypeAnimOrder className='text-gray-500 text-3xl' text="i'm a second-year software engineering student at the university of waterloo" show={activeIndex >= 1} showNext={setNextActive} noAnim={activeIndex >= 2} waitAfter={false}/>
        <TypeAnimOrder className='text-gray-500 text-3xl' text="and an aspiring developer with an interest in computer vision, music and audio, and full-stack development." show={activeIndex >= 2} showNext={setNextActive} noAnim={activeIndex >= 3}/>
      </div>
      <div className='flex flex-col gap-y-1'>
        <LinkAnim animProps={{text:'my experience', show:activeIndex >= 3, showNext:setNextActive, noAnim:activeIndex >= 4}} href='/experience'/>
        <LinkAnim animProps={{text:'my projects', show:activeIndex >= 4, showNext:setNextActive, noAnim:activeIndex >= 5}} href='/projects'/>
        <LinkAnim animProps={{text:'my github', show:activeIndex >= 5, showNext:setNextActive, noAnim:activeIndex >= 6}} href='https://github.com/frank731' newPage={true}/>
        <LinkAnim animProps={{text:'my linkedin', show:activeIndex >= 6, showNext:setNextActive, noAnim:activeIndex >= 7}} href='https://www.linkedin.com/in/frank-li-b28b331b1/' newPage={true}/>
        <LinkAnim animProps={{text:'my resume', show:activeIndex >= 7, showNext:setNextActive, noAnim:activeIndex >= 8}} href='https://drive.google.com/file/d/1uUnbYFLP77xh6dzkrmBXP-QQ1Q-yBOYx/view?usp=sharing' newPage={true}/>
      </div>
    </main>
  )
}
