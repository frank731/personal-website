'use client'

import Project from "../components/project"
import LinkA from "../components/link-a"
import ButtonA from "../components/button-a"
import { useState, useEffect } from "react"
import projectData from '../project-info.json'

const loadedKey = "projectsLoaded";
const projectCnt = projectData.length;

export default function Projects() {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [loaded, setLoaded] = useState(new Array(projectCnt).fill(0));
    const [fullyLoaded, setFullyLoaded] = useState(false);

    const updateLoaded = () => {
      const nextLoaded = loaded.map((c, i) => {
        if (i === visibleIndex) {
          return 1;
        } else {
          return c;
        }
      });
      setLoaded(nextLoaded);
      sessionStorage.setItem(loadedKey, loaded.toString());
    }
    const incrementIndex = () => {
      updateLoaded();
      setVisibleIndex(visibleIndex + 1);
    }
    const decrementIndex = () => {
      updateLoaded();
      setVisibleIndex(visibleIndex - 1);
    }
    
    const handleBeforeUnload = (event : Event) => {
      sessionStorage.clear();
    };

    useEffect(() => {
      if(sessionStorage.getItem(loadedKey) != null){
        setLoaded(sessionStorage.getItem(loadedKey)!.split(","));
      }
      sessionStorage.setItem(loadedKey, loaded.toString());
      setFullyLoaded(true);
      addEventListener('beforeunload', handleBeforeUnload);
      return () => {
        removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
    
    if(fullyLoaded){
      return (
        <main className="flex flex-col h-screen ml-10 py-5">
          <LinkA href="/" text="back" className=""/>
          <div className="grow flex flex-col justify-self-center justify-items-start justify-center place-items-start gap-y-4 py-2">
            {
              projectData.map((project, index) => {
                return(
                  <Project noAnim={loaded[index]} show={visibleIndex == index} title={project.title} href={project.href} desc={project.desc} techStack={project.techStack} image={project.image}/>
                )
              })
            }
          </div>
          <div className="bottom-5 left-10 flex flex-col place-items-start gap-y-1 py-4">
            <ButtonA onClick={decrementIndex} active={visibleIndex != 0} text="prev project"/>
            <ButtonA onClick={incrementIndex} active={visibleIndex != projectCnt - 1} text="next project"/>
          </div>
        </main>
        )
    }
}