import Link from "next/link"

type LinkProps = {
    text: string;
    href: string;
    className?: string;
    newPage?: boolean;
}

export default function LinkA({text, href, className, newPage = false} : LinkProps){
    return(
        <Link className={"text-gray-400 text-2xl hover:text-gray-600 " + className} href={href} target={newPage ? "_blank" : ""} rel={newPage ? "noopener noreferrer" : ""}>&gt; {text}</Link>
    )
}