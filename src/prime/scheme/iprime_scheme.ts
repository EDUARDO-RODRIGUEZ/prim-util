
/**
 * Interfaces
*/
export interface IPrimeScheme {
    title: string;
    author: string;
    expressions: expressionScheme[];
    program: (expression: expressionScheme) => void;
    transform: (key: string, value: number) => string;
    execute: () => void;
}

/**
 * Types
*/

export type expressionScheme = {
    title: string;
    template: string;
    key: string;
    range: {
        start: number;
        end: number;
        jump: number;
    }
}

/**
 * Default values
*/
const defaultExpressionScheme: expressionScheme = {
    title: "",
    template: "",
    key: "",
    range: {
        start: 0,
        end: 0,
        jump: 0
    }
}

const DefaultPrimeScheme = {
    defaultExpressionScheme,
}

export default DefaultPrimeScheme