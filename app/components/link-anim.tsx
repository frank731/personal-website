import TypeAnimOrder, { TypeAnimProps } from "./type-anim-order"
import Link from "next/link"

type LinkProps = {
    href: string;
    animProps: TypeAnimProps;
    newPage?: boolean;
}

export default function LinkAnim({href, animProps, newPage = false} : LinkProps){
    return(
        <Link className="text-gray-400 text-2xl hover:text-gray-600" href={href} target={newPage ? "_blank" : ""} rel={newPage ? "noopener noreferrer" : ""}><TypeAnimOrder text={"> " + animProps.text} noAnim={animProps.noAnim} show={animProps.show} showNext={animProps.showNext} className={animProps.className}/></Link>
    )
}