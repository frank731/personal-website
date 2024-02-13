type ButtonProps = {
    text: string;
    className?: string;
    active?: boolean;
    onClick: () => void;
}

export default function ButtonA({text, className, active = true, onClick} : ButtonProps){
    return(
        <button type="button" className={"text-gray-400 text-2xl enabled:hover:text-gray-600 disabled:opacity-50 " + className} onClick={onClick} disabled={!active}>&gt; {text}</button>
    )
}