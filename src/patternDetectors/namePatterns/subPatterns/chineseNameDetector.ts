import { PatternDetectorItem } from '../../../types';
import { isChineseName } from '../validator';

const isChineseNameDetector: PatternDetectorItem = {
    name: '',
    validateFun: (bit: string) => {
        const res = isChineseName(bit);
        if (res) {
            return {
                patternName: `chineseName${bit.length}Word` // 支持动态返回patternName
            };
        }
        return false;
    },
    subPatternDetectors: []
};

export default isChineseNameDetector;
