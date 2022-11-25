import { isLetter } from './validator';
import { threeLetterDetector, fourLetterDetector, fiveLetterDetector, otherLetterDetector } from './subPatterns';
import { PatternDetectorItem } from '../../types';

const letterDetector: PatternDetectorItem = {
    name: 'Letter',
    validateFun: (bit: string): boolean => {
        return isLetter(bit);
    },
    subPatternDetectors: [threeLetterDetector, fourLetterDetector, fiveLetterDetector, otherLetterDetector]
};

export default letterDetector;
