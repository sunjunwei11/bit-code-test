import { PatternDetectorItem } from '../../types';
import {
    isChineseNameDetector,
    isCommonChineseNameDetector,
    isCommonEnglishNameDetector,
    isChineseSurnameDetector
} from './subPatterns';

const nameDetector: PatternDetectorItem = {
    name: '',
    validateFun: (_bit: string): boolean => {
        return true;
    },
    subPatternDetectors: [
        isChineseNameDetector,
        isCommonChineseNameDetector,
        isCommonEnglishNameDetector,
        isChineseSurnameDetector
    ]
};

export default nameDetector;
