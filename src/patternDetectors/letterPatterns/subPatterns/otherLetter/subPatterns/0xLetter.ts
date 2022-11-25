import { PatternDetectorItem } from '../../../../../types';

const nameToReg = {
    '0x1Letter': /^0x[a-zA-Z]$/,
    '0x2Letter': /^0x[a-zA-Z]{2}$/
};

function getDetectorItemByName(name: string) {
    const item: PatternDetectorItem = {
        name,
        validateFun: (bit: string) => {
            const reg = nameToReg[name];
            if (reg) {
                return reg.test(bit);
            }
            return false;
        },
        subPatternDetectors: []
    };
    return item;
}

const is0x1LetterDetector = getDetectorItemByName('0x1Letter');
const is0x2LetterDetector = getDetectorItemByName('0x2Letter');

export { is0x1LetterDetector, is0x2LetterDetector };
