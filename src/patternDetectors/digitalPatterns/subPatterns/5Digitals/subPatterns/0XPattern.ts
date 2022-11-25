import { PatternDetectorItem } from '../../../../../types';

const nameToReg: {
    [key: string]: RegExp;
} = {
    '0XXX0': /^0[1-9]{3}0$/,
    '00XX0': /^00[1-9]{2}0$/,
    '0X0X0': /^0[1-9]0[1-9]0$/,
    '0XX00': /^0[1-9]{2}00$/,
    '69XXX': /^69[1-9]{3}$/,
    XXX69: /^[0-9]{3}69$/,
    XXX88: /^[0-9]{3}88$/
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

const is0XXX0 = get0XConstructor('0XXX0');
const is00XX0 = get0XConstructor('00XX0');
const is0X0X0 = get0XConstructor('0X0X0');
const is0XX00 = get0XConstructor('0XX00');
const is69XXX = get0XConstructor('69XXX');
const isXXX69 = get0XConstructor('XXX69');
const isXXX88 = get0XConstructor('XXX88');

export { is0XXX0, is00XX0, is0X0X0, is0XX00, is69XXX, isXXX69, isXXX88 };
