import { isFixedNumDigital, isNationalFlagDigit, isCommonDigit } from '../../validator';

const is4Digital = (bit: string) => {
    return isFixedNumDigital(bit, 4) || isNationalFlagDigit(bit, 4);
};

const is10kDigit = (bit: string) => {
    return isCommonDigit(bit, 4);
};

// 判断是否是99乘法表的数字，比如1101 1202 8972 9981
const is99Multiplication = (bit: string) => {
    const reg = /^(\d)(\d)(\d\d)$/;
    const res = bit.match(reg);
    if (res) {
        const num1 = parseInt(res[1]);
        const num2 = parseInt(res[2]);
        const num3 = parseInt(res[3]);
        return num1 * num2 === num3;
    }
    return false;
};

const isBirthdayDigital = (bit: string) => {
    const reg = /^(\d\d)(\d\d)$/;
    const res = bit.match(reg);
    if (res) {
        const month = parseInt(res[1]);
        const day = parseInt(res[2]);
        if (month >= 1 && month <= 12) {
            // 有31天
            if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
                return !!(day >= 1 && day <= 31);
            }
            //  有30天
            else if ([4, 6, 9, 11].includes(month)) {
                return !!(day >= 1 && day <= 30);
            }
            // 最多29天
            else if (2 === month) {
                return !!(day >= 1 && day <= 29);
            }
        }
    }
    return false;
};

export * from '../../validator';

export { is4Digital, is10kDigit, is99Multiplication, isBirthdayDigital };
