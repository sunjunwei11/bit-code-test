import { nationalFlagEmojis } from './constant';

/**
 * 是否是普通阿拉伯数字，例如 11、123
 * @param bit {string}
 * @param fixNum {number} 如果传了该参数则表示是判断是否是固定位数的数字
 */
function isCommonDigit(bit: string, fixNum?: number): boolean {
    const times = fixNum ? `{${fixNum}}` : '+';
    const reg = new RegExp(`^\\d${times}$`);
    return reg.test(bit);
}

/**
 * 是否是日语数字，例如 零伍弐、零漆伍
 * @param bit {string}
 * @param fixNum {number} 如果传了该参数则表示是判断是否是固定位数的数字
 */
function isJapaneseDigit(bit: string, fixNum?: number): boolean {
    const times = fixNum ? `{${fixNum}}` : '+';
    const reg = new RegExp(`^[零壱弐参肆伍陸漆捌玖]${times}$`);
    return reg.test(bit);
}

/**
 * 是否是中文数字，例如 零零一、一六零
 * @param bit
 * @param fixNum {number} 如果传了该参数则表示是判断是否是固定位数的数字
 */
function isChineseDigit(bit: string, fixNum?: number): boolean {
    const times = fixNum ? `{${fixNum}}` : '+';
    const reg = new RegExp(`^[零一二三四五六七八九]${times}$`);
    return reg.test(bit);
}

// 是否是国旗数字, 例如 🇺🇸001、🇨🇳001
function isNationalFlagDigit(bit: string, fixNum?: number): boolean {
    let regString = nationalFlagEmojis.join('|');
    const times = fixNum ? `{${fixNum}}` : '+';
    regString = `[${regString}][0-9]${times}`;
    const reg = new RegExp(regString);
    return reg.test(bit);
}

// 判断是几位数字的一些通用规则，该函数返回true则可认为是对应位数的数字
// 注意这个方法返回true，则最终结果肯定位true，如果返回false，最终结果不一定位false
// 比如 isFixedNumDigitalCommonRules('360°', 3)返回false，但实际也算是一个3位数
// 360°可以归类到表示度数的3位数字里面，所以在3位数的校验规则里面还会有一个判断是否是3位数度数的规则
function isFixedNumDigital(bit: string, num: number): boolean {
    return isCommonDigit(bit, num) || isJapaneseDigit(bit, num) || isChineseDigit(bit, num);
}

// 判断是否是 000° ～ 360°
const isDegreesNum = (bit: string) => {
    const reg = /^(\d+)°$/;
    const res = bit.match(reg);
    return !!(res && +res[1] >= 0 && +res[1] <= 360);
};

const is0xDigital = (bit: string) => {
    return /^0x[0-9a-fA-F]{1,4}$/.test(bit);
};

// 数字的最外层判断
function isDigit(bit: string) {
    return (
        isCommonDigit(bit) ||
        isJapaneseDigit(bit) ||
        isChineseDigit(bit) ||
        isNationalFlagDigit(bit) ||
        isDegreesNum(bit) ||
        is0xDigital(bit)
    );
}

export {
    isCommonDigit,
    isJapaneseDigit,
    isChineseDigit,
    isNationalFlagDigit,
    isFixedNumDigital,
    isDegreesNum,
    isDigit,
    is0xDigital
};
