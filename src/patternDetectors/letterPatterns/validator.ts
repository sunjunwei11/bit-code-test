/**
 * 检测普通格式的字母 AAB ABC等等
 * @param bit {string}
 * @param fixNum 如果存在fixNum，则需要检测位数是否满足
 */
function isCommonLetter(bit: string, fixNum?: number): boolean {
    const times = fixNum ? `{${fixNum}}` : '+';
    const reg = new RegExp(`^[a-zA-Z]${times}$`);
    return reg.test(bit);
}

// 判断是否是0x开头的字母
function is0xLetter(bit: string, fixNum?: number): boolean {
    const times = fixNum ? `{${fixNum}}` : '+';
    const reg = new RegExp(`^0x[a-zA-Z]${times}$`);
    return reg.test(bit);
}

// 字母的最外层判断
function isLetter(bit: string): boolean {
    return isCommonLetter(bit) || is0xLetter(bit);
}

export { isLetter, isCommonLetter, is0xLetter };
