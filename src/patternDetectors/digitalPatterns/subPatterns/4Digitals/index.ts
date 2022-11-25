import { PatternDetectorItem } from '../../../../types';
import { is4Digital } from './validators';

import {
    isJapanese4D,
    isChinese4D,
    is10k,
    is0XXX,
    is00XX,
    is0X0X,
    is0XX0,
    isXX00,
    isXX88,
    isXX69,
    is99MultiplicationTable,
    isBirthdayDigitalDetector
} from './subPatterns';

const fourDigitalDetector: PatternDetectorItem = {
    name: '4D',
    validateFun: (bit: string): boolean => {
        return is4Digital(bit);
    },
    subPatternDetectors: [
        is10k,
        isJapanese4D,
        isChinese4D,
        is0XXX,
        is00XX,
        is0X0X,
        is0XX0,
        isXX00,
        isXX88,
        isXX69,
        is99MultiplicationTable,
        isBirthdayDigitalDetector
    ]
};

export default fourDigitalDetector;
