import React from 'react';
import Row from './Row';

import './Main.css';

interface MainProps {}

const Main: React.FC<MainProps> = () => {
    const [result, setResult] = React.useState<string>('0');

    const data: string[][] = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];

    const evaluateExpression = (expression: string): string => {
        try {
            const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
            const result: string = new Function(
                `"use strict"; return (${sanitizedExpression})`
            )().toString();
            return result;
        } catch {
            return 'Error';
        }
    };

    const handleClick = (buttonValue: string) => {
        switch (buttonValue) {
            case 'C':
                setResult('0');
                break;
            case '=':
                setResult(evaluateExpression(result));
                break;
            default:
                setResult((prev) =>
                    prev === '0' ? buttonValue : prev + buttonValue
                );
                break;
        }
    };

    return (
        <div className="main-container">
            <div className="display">
                <h2>{result}</h2>
            </div>
            {data.map((row, i) => (
                <Row key={i} row={row} onClick={handleClick} />
            ))}
        </div>
    );
};

export default Main;
