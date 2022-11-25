import { PatternDetectorItem } from '../../../types';
import { isCommonChineseName } from '../validator';

const isCommonChineseNameDetector: PatternDetectorItem = {
    name: 'commonChineseName',
    validateFun: (bit: string) => {
        return isCommonChineseName(bit);
    },
    subPatternDetectors: []
};

export default isCommonChineseNameDetector;
