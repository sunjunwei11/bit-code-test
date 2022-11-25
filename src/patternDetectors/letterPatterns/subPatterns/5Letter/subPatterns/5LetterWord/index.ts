import { word5Letter } from './word';
import { PatternDetectorItem } from '../../../../../../types';

const is5LetterWordDetector: PatternDetectorItem = {
    name: '5L_Word',
    validateFun: (bit: string) => {
        return word5Letter.includes(bit);
    },
    subPatternDetectors: []
};

export { is5LetterWordDetector };
