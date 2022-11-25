import { PatternDetectorItem } from '../../../../types';
import { is0xDigital } from './validators';

import {
    is0x9Detector,
    is0x99Detector,
    is0x999Detector,
    is0x10kDetector,
    is1HexDetector,
    is2HexDetector,
    is3HexDetector
} from './subPatterns';

const is0xDigitalDetector: PatternDetectorItem = {
    name: '0x',
    validateFun: (bit: string): boolean => {
        return is0xDigital(bit);
    },
    subPatternDetectors: [
        is0x9Detector,
        is0x99Detector,
        is0x999Detector,
        is0x10kDetector,
        is1HexDetector,
        is2HexDetector,
        is3HexDetector
    ]
};

export default is0xDigitalDetector;
