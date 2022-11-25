import { PatternDetectorItem } from '../../../types';
import { isCommonEnglishName } from '../validator';

const isCommonEnglishNameDetector: PatternDetectorItem = {
    name: 'commonEnglishName',
    validateFun: (bit: string) => {
        return isCommonEnglishName(bit);
    },
    subPatternDetectors: []
};

export default isCommonEnglishNameDetector;
