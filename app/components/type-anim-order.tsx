'use client'

import { createRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

export type TypeAnimProps = {
    text: string;
    show?: boolean;
    noAnim?: boolean;
    waitAfter?: boolean;
    speed?: undefined;
    className?: string;
    showNext?: () => void;
}

export default function TypeAnimOrder({text, show = true, noAnim = false, waitAfter = true, speed = 75, className, showNext} : TypeAnimProps){
    const ref = createRef<HTMLSpanElement>();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const showCursorAnimation = (showC: boolean) => {
        if (!ref.current) {
            return;
        }
        const el = ref.current;
        if (showC) {
            el.classList.add(CURSOR_CLASS_NAME);
        } else {
            el.classList.remove(CURSOR_CLASS_NAME);
        }
    };
    if (show){
        if (noAnim){
            return(
                <span className={className + " whitespace-pre-line"}>{text}</span>
            )
        }
        else{
            let seq; 
            if (showNext){
                if (waitAfter) seq = [text, 250, () => {showNext()}, () => showCursorAnimation(false)];
                else seq = [text, () => {showNext()}, () => showCursorAnimation(false)];
            } 
            else seq = [text, () => showCursorAnimation(false)];
            return(
                <>
                    <TypeAnimation
                        ref={ref}
                        sequence={seq}
                        cursor={false}
                        className={CURSOR_CLASS_NAME + " whitespace-pre-line " + className}
                        speed={speed}
                    />
                    <style global jsx>{`
                        .custom-type-animation-cursor::after {
                            content: '|';
                            animation: cursor 1.1s infinite step-start;
                        }
                        @keyframes cursor {
                            50% {
                            opacity: 0;
                            }
                        }
                        `}</style>
                </>
            )
        }
    }

}