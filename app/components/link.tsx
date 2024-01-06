type LinkProps = {
    text: string;
    href: string;
}
export default function Link({text, href} : LinkProps){
    return(
        <a className="text-gray-400 text-xl hover:text-gray-600" href={href}>&gt; {text}</a>
    )
}