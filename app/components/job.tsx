import JobText, {JobTextProps} from "./job-text";
import ButtonA from "./button-a";

type JobProps = {
    company: string;
    onClick: () => void;
    textProps: JobTextProps;
}

export default function Job({company, onClick, textProps} : JobProps){
    return(
        <div className='flex flex-col gap-y-2'>
            <ButtonA className={'self-start' + (textProps.show ? ' text-gray-950' : '')} onClick={onClick} text={company}/>
            <JobText title={textProps.title} desc={textProps.desc} show={textProps.show} noAnim={textProps.noAnim}/>
        </div>
    )
}