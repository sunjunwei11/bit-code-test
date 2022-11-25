import { isDigit } from './validator';
import {
    threeDigitalDetector,
    fourDigitalDetector,
    fiveDigitalDetector,
    sixDigitalDetector,
    moreThanSixDigitalDetector,
    is0xDigitalDetector,
    commonDigitalDetector
} from './subPatterns';
import { PatternDetectorItem } from '../../types';

const digitalDetector: PatternDetectorItem = {
    name: 'Digit',
    validateFun: (bit: string): boolean => {
        return isDigit(bit);
    },
    subPatternDetectors: [
        threeDigitalDetector, // 三位数字相关检测
        fourDigitalDetector, // 四位数字相关检测
        fiveDigitalDetector, // 五位数字相关检测
        sixDigitalDetector, // 6位数字相关检测
        moreThanSixDigitalDetector, // 超过6位数字相关检测
        is0xDigitalDetector, // 检测0x开头的16进制数
        commonDigitalDetector // 通用的数字检测规则，比如AAB、AABB这种Pattern
    ]
};

export default digitalDetector;
