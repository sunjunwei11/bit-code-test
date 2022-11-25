import { PatternDetectorItem } from '../../../../types';
import { isMoreThan6Digital } from './validators';

import {
    AAAAAAADetector,
    ABBBBBBDetector,
    AAABBBBDetector,
    AAAAABBBBBDetector,
    leopardPhoneNumberDetector
} from './subPatterns';

const moreThanSixDigitalDetector: PatternDetectorItem = {
    name: '>6D',
    validateFun: (bit: string): boolean => {
        return isMoreThan6Digital(bit);
    },
    subPatternDetectors: [
        AAAAAAADetector,
        ABBBBBBDetector,
        AAABBBBDetector,
        AAAAABBBBBDetector,
        leopardPhoneNumberDetector
    ]
};

export default moreThanSixDigitalDetector;
