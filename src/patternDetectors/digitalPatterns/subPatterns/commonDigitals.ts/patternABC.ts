import { PatternDetectorItem } from '../../../../types';
import { getABCPattern, checkDigitalIncrease } from '../../../../utils';
import { isCommonDigit } from '../../validator';

// 动态返回patternName
// AAB AAA等
const commonABCDetector: PatternDetectorItem = {
    name: '',
    validateFun: (bit: string) => {
        if (bit.length > 6) return false; // 过于长的数字不检测
        const res = isCommonDigit(bit);
        const pattern = getABCPattern(bit);
        if (res) {
            // 这几个模式需要特殊处理，要再判断一下是不是递增
            // 123属于ABC，但是136不属于ABC
            if (['ABC', 'ABCD', 'ABCDE', 'ABCDEF'].includes(pattern) && !checkDigitalIncrease(bit, 1)) {
                return false;
            }
            return {
                patternName: getABCPattern(bit)
            };
        }
        return false;
    },
    subPatternDetectors: []
};

export { commonABCDetector };
