import { PatternDetectorItem } from '../../../types';
import { isChineseSurname } from '../validator';

// 中文姓检测
const isChineseSurnameDetector: PatternDetectorItem = {
    name: 'chineseSurname',
    validateFun: (bit: string) => {
        return isChineseSurname(bit);
    },
    subPatternDetectors: []
};

export default isChineseSurnameDetector;
