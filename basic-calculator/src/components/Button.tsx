import React from 'react';

import './Button.css';

type Props = {
    btn: string;
    onClick: (btn: string) => void;
};

const Button: React.FC<Props> = ({ btn, onClick }) => {
    return (
        <button className="button" onClick={() => onClick(btn)}>
            {btn}
        </button>
    );
};

export default Button;
