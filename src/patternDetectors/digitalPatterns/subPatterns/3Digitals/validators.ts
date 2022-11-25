import {
    isFixedNumDigital,
    isDegreesNum,
    isJapaneseDigit,
    isChineseDigit,
    isCommonDigit,
    isNationalFlagDigit
} from '../../validator';

const is3Digital = (bit: string) => {
    return isFixedNumDigital(bit, 3) || isDegreesNum(bit) || isNationalFlagDigit(bit, 3);
};

export {
    is3Digital,
    isDegreesNum,
    isJapaneseDigit,
    isChineseDigit,
    isCommonDigit,
    isNationalFlagDigit
};
