import { PatternDetectorItem } from '../../../../../types';
import { isNationalFlagDigit } from '../validators';

// 判断是否是国旗加三位数字
const isFlag3D: PatternDetectorItem = {
    name: 'Flag3D',
    validateFun: (bit: string): boolean => {
        return isNationalFlagDigit(bit, 3);
    },
    subPatternDetectors: []
};

export { isFlag3D };
