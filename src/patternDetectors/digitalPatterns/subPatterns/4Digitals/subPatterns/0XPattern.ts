import { PatternDetectorItem } from '../../../../../types';

const nameToReg: {
    [key: string]: RegExp;
} = {
    '0XXX': /^0[1-9]{3}$/,
    '00XX': /^00[1-9]{2}$/,
    '0X0X': /^0[1-9]0[1-9]$/,
    '0XX0': /^0[1-9]{2}0$/,
    XX00: /^[1-9]{2}00$/,
    XX88: /^[1-9]{2}88$/,
    XX69: /^[1-9]{2}69$/
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

const is0XXX = get0XConstructor('0XXX');
const is00XX = get0XConstructor('00XX');
const is0X0X = get0XConstructor('0X0X');
const is0XX0 = get0XConstructor('0XX0');
const isXX00 = get0XConstructor('XX00');
const isXX88 = get0XConstructor('XX88');
const isXX69 = get0XConstructor('XX69');

export { is0XXX, is00XX, is0X0X, is0XX0, isXX00, isXX88, isXX69 };
