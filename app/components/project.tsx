import Link from "./link"

type ProjectProps = {
    title: string;
    href: string;
    image: string;
    desc: string;
}
export default function Project({title, href, image, desc} : ProjectProps){
    return(
        <div className="grid grid-cols-4 grid-flow-col gap-5">
            <div className="flex flex-col gap-y-1 col-span-2">
                <h2 className="font-bold text-3xl">{title}</h2>
                <p className="text-black text-xl">{desc}</p>
                <Link text="Link to Project" href={href}/>
            </div>
            <img src={image} className="rounded-lg shadow-xl max-w-lg max-h-md"/>
        </div>
    )
}