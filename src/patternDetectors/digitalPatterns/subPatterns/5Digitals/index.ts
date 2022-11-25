import { PatternDetectorItem } from '../../../../types';
import { is5Digital } from './validators';

import { is100k, is0XXX0, is00XX0, is0X0X0, is0XX00, is69XXX, isXXX69, isXXX88 } from './subPatterns';

const fiveDigitalDetector: PatternDetectorItem = {
    name: '5D',
    validateFun: (bit: string): boolean => {
        return is5Digital(bit);
    },
    subPatternDetectors: [is100k, is0XXX0, is00XX0, is0X0X0, is0XX00, is69XXX, isXXX69, isXXX88]
};

export default fiveDigitalDetector;
