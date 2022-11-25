import { PatternDetectorItem } from '../../../../../types';
import { isJapaneseDigit, isChineseDigit } from '../validators';

// 判断是否是日语3位数
const isJapanese3D: PatternDetectorItem = {
    name: 'Japanese3D',
    validateFun: (bit: string): boolean => {
        return isJapaneseDigit(bit, 3);
    },
    subPatternDetectors: []
};

// 判断是否是中文3位数
const isChinese3D: PatternDetectorItem = {
    name: 'Chinese3D',
    validateFun: (bit: string): boolean => {
        return isChineseDigit(bit, 3);
    },
    subPatternDetectors: []
};

export { isJapanese3D, isChinese3D };
