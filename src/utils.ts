/**
 *
 * @param bit {string}
 * @returns
 * 121 => ABA
 * 1122 => AABB
 * 13321 => ABBCA
 * TTYY => AABB
 * QWWR => ABBC
 */
function getABCPattern(bit: string): string {
    const map: {
        [key: number]: string;
    } = {};
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const uniBitArray = [...new Set(bit)];
    for (let i = 0; i < uniBitArray.length; i++) {
        map[uniBitArray[i]] = letters[i];
    }
    const patternArray: string[] = [];
    [...bit].forEach((i) => patternArray.push(map[i]));
    return patternArray.join('');
}

// 校验数字是否递增
// 比如step为1，则需要为123 34567这种
// 比如step为2，则需要为135 2468这种
function checkDigitalIncrease(bit: string, step: number = 1) {
    if (!/^\d{2,}$/.test(bit)) return false;
    let res = true;
    for (let i = 0; i < bit.length - 1; i++) {
        if (parseInt(bit[i + 1]) - parseInt(bit[i]) !== step) {
            res = false;
        }
    }
    return res;
}

export { getABCPattern, checkDigitalIncrease };
