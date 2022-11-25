import { PatternDetectorItem } from '../../../../../types';
import { isAShare } from '../validators';

// 是否是A股代码
const isAshareDetector: PatternDetectorItem = {
    name: 'A-Share',
    validateFun: (bit: string): boolean => {
        return isAShare(bit);
    },
    subPatternDetectors: []
};

export { isAshareDetector };
