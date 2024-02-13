import TypeAnimOrder, { TypeAnimProps } from "./type-anim-order";

type ButtonProps = {
    animProps: TypeAnimProps;
    active?: boolean;
    onClick: () => void;
}

export default function ButtonAnim({animProps, active = true, onClick} : ButtonProps){
    return(
        <button type="button" className="text-gray-400 text-2xl enabled:hover:text-gray-600 disabled:opacity-50" onClick={onClick} disabled={!active}><TypeAnimOrder text={"> " + animProps.text} noAnim={animProps.noAnim} show={animProps.show} showNext={animProps.showNext} className={animProps.className}/></button>
    )
}