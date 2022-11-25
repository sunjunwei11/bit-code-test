import { PatternDetectorItem } from '../../../../../types';
import { isJapaneseDigit, isChineseDigit } from '../validators';

// 判断是否是4位日语数字
const isJapanese4D: PatternDetectorItem = {
    name: 'Japanese4D',
    validateFun: (bit: string): boolean => {
        return isJapaneseDigit(bit, 4);
    },
    subPatternDetectors: []
};

// 判断是否是4位中文数字
const isChinese4D: PatternDetectorItem = {
    name: 'Chinese4D',
    validateFun: (bit: string): boolean => {
        return isChineseDigit(bit, 4);
    },
    subPatternDetectors: []
};

export { isJapanese4D, isChinese4D };
