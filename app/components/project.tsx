import TypeAnimOrder from "./type-anim-order";
import LinkAnim from "./link-anim";
import { useEffect, useState } from "react";

type ProjectProps = {
    title: string;
    href: string;
    image: string;
    desc: string;
    techStack: string;
    show: boolean;
    noAnim: boolean;
}

export default function Project({title, href, image, desc, techStack, show, noAnim} : ProjectProps){
    const [activeIndex, setActiveIndex] = useState(0);
    const incrementIndex = () => {
        if(!noAnim) setActiveIndex(activeIndex + 1);
    }
    useEffect(() => {
        if(noAnim) setActiveIndex(3); //show all in case of clicking off project while still typing
      }, [show]);
  
    if(show) {
        return(
            <div className="flex flex-col justify-items-start justify-center gap-y-4 col-span-2">
                <TypeAnimOrder className="font-bold text-5xl" text={title} showNext={incrementIndex} noAnim={noAnim}/>
                <TypeAnimOrder className="text-black text-xl" text={desc} show={activeIndex >= 1} showNext={incrementIndex} noAnim={noAnim}/>
                <TypeAnimOrder className="text-black text-xl" text={techStack} show={activeIndex >= 2} showNext={incrementIndex} noAnim={noAnim}/>
                <div className="grow max-h-[50vh]">
                    <img hidden={activeIndex < 3} src={image} className="rounded-lg shadow-xl h-full w-auto"/>
                </div>
                <LinkAnim animProps={{text:'project link', show:activeIndex >= 3, noAnim:noAnim}} href={href} newPage={true}/>
            </div>
        )
    }
}