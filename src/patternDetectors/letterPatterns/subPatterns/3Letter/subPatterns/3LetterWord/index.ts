import { word3Letter } from './word';
import { PatternDetectorItem } from '../../../../../../types';

const is3LetterWordDetector: PatternDetectorItem = {
    name: '3L_Word',
    validateFun: (bit: string) => {
        return word3Letter.includes(bit);
    },
    subPatternDetectors: []
};

export { is3LetterWordDetector };
