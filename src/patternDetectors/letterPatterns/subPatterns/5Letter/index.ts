import { PatternDetectorItem } from '../../../../types';
import { is5LetterWordDetector } from './subPatterns';
import is5Letter from './validators';

const fiveLetterDetector: PatternDetectorItem = {
    name: '5Letter',
    validateFun: (bit: string): boolean => {
        return is5Letter(bit);
    },
    subPatternDetectors: [is5LetterWordDetector]
};

export default fiveLetterDetector;
