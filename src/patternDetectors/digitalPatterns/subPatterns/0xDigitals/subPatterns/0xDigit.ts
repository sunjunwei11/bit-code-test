import { PatternDetectorItem } from '../../../../../types';

const nameToReg: {
    [key: string]: RegExp;
} = {
    '0x9': /^0x\d$/,
    '0x99': /^0x\d{2}$/,
    '0x999': /^0x\d{3}$/,
    '0x10K': /^0x\d{4}$/,
    '1Hex': /^0x[0-9a-fA-F]$/,
    '2Hex': /^0x[0-9a-fA-F]{2}$/,
    '3Hex': /^0x[0-9a-fA-F]{3,4}$/
};

const get0xConstructor = (name: string): PatternDetectorItem => {
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

const is0x9Detector: PatternDetectorItem = get0xConstructor('0x9');
const is0x99Detector: PatternDetectorItem = get0xConstructor('0x99');
const is0x999Detector: PatternDetectorItem = get0xConstructor('0x999');
const is0x10kDetector: PatternDetectorItem = get0xConstructor('0x10K');
const is1HexDetector: PatternDetectorItem = get0xConstructor('1Hex');
const is2HexDetector: PatternDetectorItem = get0xConstructor('2Hex');
const is3HexDetector: PatternDetectorItem = get0xConstructor('3Hex');

export {
    is0x9Detector,
    is0x99Detector,
    is0x999Detector,
    is0x10kDetector,
    is1HexDetector,
    is2HexDetector,
    is3HexDetector
};
