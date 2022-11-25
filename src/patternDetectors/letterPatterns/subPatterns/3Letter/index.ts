import { PatternDetectorItem } from '../../../../types';
import { AAADetector, ABBDetector, ABADetector, AABDetector, is3LetterWordDetector } from './subPatterns';
import is3Letter from './validators';

const threeLetterDetector: PatternDetectorItem = {
    name: '3Letter',
    validateFun: (bit: string): boolean => {
        return is3Letter(bit);
    },
    subPatternDetectors: [AAADetector, ABBDetector, ABADetector, AABDetector, is3LetterWordDetector]
};

export default threeLetterDetector;
