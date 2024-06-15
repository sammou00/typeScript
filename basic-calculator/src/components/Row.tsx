import React from 'react';
import Button from './Button';

import './Row.css';

interface RowProps {
    row: string[];
    onClick: (btn: string) => void;
}

const Row: React.FC<RowProps> = ({ row, onClick }) => {
    return (
        <div className="row">
            {row.map((btn, i) => (
                <Button key={i} btn={btn} onClick={onClick} />
            ))}
        </div>
    );
};

export default Row;
