'use client'

import { createRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;
export type TypeAnimProps = {
    text: string;
    show?: boolean;
    noAnim?: boolean;
    waitAfter?: boolean;
    speed?: Speed;
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