import { PatternDetectorItem } from '../../../../types';
import { commonABCDetector } from './patternABC';

// 一些通用的数字检测规则
const commonDigitalDetector: PatternDetectorItem = {
    name: '',
    validateFun: (bit: string): boolean => {
        return true;
    },
    subPatternDetectors: [commonABCDetector]
};

export default commonDigitalDetector;
