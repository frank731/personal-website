import TypeAnimOrder from "./type-anim-order";
import LinkAnim from "./link-anim";
import { useEffect, useState } from "react";

export type JobTextProps = {
    title: string;
    desc: string;
    show: boolean;
    noAnim: boolean;
}

export default function JobText({title, desc, show, noAnim} : JobTextProps){
    const [activeIndex, setActiveIndex] = useState(0);
    const incrementIndex = () => {
        if(!noAnim) setActiveIndex(activeIndex + 1);
    }
    useEffect(() => {
        if(noAnim) setActiveIndex(3); //show all in case of clicking off project while still typing
      }, [show]);
  
    if(show) {
        return(
            <div className="flex flex-col justify-center col-span-2">
                <TypeAnimOrder className="font-bold text-4xl" text={title} showNext={incrementIndex} noAnim={noAnim} speed={99}/>
                <TypeAnimOrder className="text-black text-2xl" text={desc} show={activeIndex >= 1} showNext={incrementIndex} noAnim={noAnim} speed={99}/>
            </div>
        )
    }
}