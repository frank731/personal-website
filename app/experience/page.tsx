'use client'

import { useEffect, useState } from 'react';

import LinkA from '../components/link-a';
import Job from '../components/job';
import experienceData from '../experience-info.json';

const loadedKey = 'experienceLoaded';
const jobCnt = experienceData.length;

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const [loaded, setLoaded] = useState(new Array(jobCnt + 1).fill(0));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  const setActiveJobWrap = (index : number) => {
    const nextLoaded = loaded.map((c, i) => {
      if (i === activeJob) {
        return 1;
      } else {
        return c;
      }
    });
    setLoaded(nextLoaded);
    sessionStorage.setItem(loadedKey, loaded.toString());
    if(index == activeJob) setActiveJob(0);
    else setActiveJob(index); 
  }

  const handleBeforeUnload = (event : Event) => {
    sessionStorage.clear();
  };

  useEffect(() => {
    if(sessionStorage.getItem(loadedKey) != null){
      setLoaded(sessionStorage.getItem(loadedKey)!.split(","));
    }
    sessionStorage.setItem(loadedKey, loaded.toString());
    addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <main className="flex flex-col h-screen ml-10 py-5">
        <LinkA href="/" text="back" className=""/>
        <div className='grow align-start justify-center gap-y-4 flex flex-col'>
          {
            experienceData.map((experience, index) => {
              return(
                <Job company={experience.company} onClick={() => setActiveJobWrap(index + 1)} textProps={{title: experience.title, desc: experience.desc, show: activeJob == index + 1, noAnim: loaded[index + 1]}}/>
              )
            })
          }
        </div>
      </main>
  )
}
