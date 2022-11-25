import { PatternDetectorItem } from '../../../../types';
import { isMnemonicWordDetector, is0x1LetterDetector, is0x2LetterDetector } from './subPatterns';

const otherLetterDetector: PatternDetectorItem = {
    name: '',
    validateFun: (_bit: string): boolean => {
        return true;
    },
    subPatternDetectors: [isMnemonicWordDetector, is0x1LetterDetector, is0x2LetterDetector]
};

export default otherLetterDetector;
