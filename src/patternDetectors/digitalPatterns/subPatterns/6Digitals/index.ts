import { PatternDetectorItem } from '../../../../types';
import { is6Digital } from './validators';

import { is000XXX, isXXX000, isXXX420, is420XXX, isAshareDetector } from './subPatterns';

const sixDigitalDetector: PatternDetectorItem = {
    name: '6D',
    validateFun: (bit: string): boolean => {
        return is6Digital(bit);
    },
    subPatternDetectors: [is000XXX, isXXX000, isXXX420, is420XXX, isAshareDetector]
};

export default sixDigitalDetector;
