import { PatternDetectorItem } from '../../../../../types';
import { isDegreesNum } from '../validators';

// 判断是否是 000° ～ 360°
const degreeDetector: PatternDetectorItem = {
    name: 'Degrees',
    validateFun: (bit: string): boolean => {
        return isDegreesNum(bit);
    },
    subPatternDetectors: []
};

export { degreeDetector };
