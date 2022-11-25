import { PatternDetectorItem } from '../../../../../types';
import { isBirthdayDigital } from '../validators';

// 判断是否是生日号码
const isBirthdayDigitalDetector: PatternDetectorItem = {
    name: 'Birthday',
    validateFun: (bit: string): boolean => {
        return isBirthdayDigital(bit);
    },
    subPatternDetectors: []
};

export { isBirthdayDigitalDetector };
