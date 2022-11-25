import { PatternDetectorItem } from '../../../../../types';

const nameToReg: {
    [key: string]: RegExp;
} = {
    '000XXX': /^000[1-9]{3}$/,
    XXX000: /^[1-9]{3}000$/,
    XXX420: /^[1-9]{3}420$/,
    '420XXX': /^420[1-9]{3}$/
};

const get0XConstructor = (name: string): PatternDetectorItem => {
    return {
        name,
        validateFun(bit: string) {
            if (nameToReg[name]) {
                return nameToReg[name].test(bit);
            } else {
                return false;
            }
        },
        subPatternDetectors: []
    };
};

const is000XXX = get0XConstructor('000XXX');
const isXXX000 = get0XConstructor('XXX000');
const isXXX420 = get0XConstructor('XXX420');
const is420XXX = get0XConstructor('420XXX');

export { is000XXX, isXXX000, isXXX420, is420XXX };
