import { PatternDetectorItem } from '../../../../../types';
import { isLeopardPhoneNumber } from '../validators';

// 是否是豹子手机号
const leopardPhoneNumberDetector: PatternDetectorItem = {
    name: 'LeopardPhoneNumber',
    validateFun: (bit: string): boolean => {
        return isLeopardPhoneNumber(bit);
    },
    subPatternDetectors: []
};

export { leopardPhoneNumberDetector };
