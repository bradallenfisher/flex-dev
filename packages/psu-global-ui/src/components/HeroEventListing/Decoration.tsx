/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';

type DecorationProps = {
    extraSx?: any;
};

export const Decoration = ({ extraSx }: DecorationProps) => {
    return (
        <svg sx={{...extraSx}} width="566" height="716" viewBox="0 0 566 716" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_34838_1852)">
            <path d="M95.3401 663.58H197.4L227.82 575.32H125.76L95.3401 663.58Z" fill="#F0FF3E"/>
            <path d="M741.54 126.04H204.12L230.16 50.5H767.52L741.54 126.04Z" stroke="#1E407C" stroke-miterlimit="10"/>
            <path d="M621.96 551.92H106.38L138.66 458.14H654.24L621.96 551.92Z" stroke="#1E407C" stroke-miterlimit="10"/>
            <path d="M287.46 339.46H78.0601L98.0401 281.44H307.44L287.46 339.46Z" stroke="#1E407C" stroke-miterlimit="10"/>
            <path d="M321.06 625.9H643.26L674.04 536.5H351.84L321.06 625.9Z" stroke="#1E407C" stroke-miterlimit="10"/>
            <path d="M403.8 213.58H193.68L230.64 106.3H440.76L403.8 213.58Z" stroke="#1E407C" stroke-miterlimit="10"/>
            <path d="M526.26 395.98H245.52L270.06 324.76H550.74L526.26 395.98Z" stroke="#1E407C" stroke-miterlimit="10"/>
            <path d="M145.74 371.8H2.09998L18.24 324.94H161.88L145.74 371.8Z" stroke="#1E407C" stroke-miterlimit="10"/>
            </g>
            <defs>
            <clipPath id="clip0_34838_1852">
            <rect width="566" height="716" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );
};
