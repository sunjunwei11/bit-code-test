import { PatternDetectorItem } from '../../../../types';
import { getABCPattern, checkDigitalIncrease } from '../../../../utils';
import { isCommonDigit } from '../../validator';

// 需要为连续的3位数，012 234
const ABCDetector: PatternDetectorItem = {
    name: 'ABC',
    validateFun: (bit: string) => {
        const reg = /^(\d)(\d)(\d)$/;
        const res = bit.match(reg);
        if (res) {
            const [_, num1, num2, num3] = res;
            const condition1 = parseInt(num2) - parseInt(num1) === 1;
            const condition2 = parseInt(num3) - parseInt(num2) === 1;
            return condition1 && condition2;
        }
        return false;
    },
    subPatternDetectors: []
};

// 需要为连续的4位数，0123 2345
const ABCDDetector: PatternDetectorItem = {
    name: 'ABCD',
    validateFun: (bit: string) => {
        const reg = /^(\d)(\d)(\d)(\d)$/;
        const res = bit.match(reg);
        if (res) {
            const [_, num1, num2, num3, num4] = res;
            const condition1 = parseInt(num2) - parseInt(num1) === 1;
            const condition2 = parseInt(num3) - parseInt(num2) === 1;
            const condition3 = parseInt(num4) - parseInt(num3) === 1;
            return condition1 && condition2 && condition3;
        }
        return false;
    },
    subPatternDetectors: []
};

// 需要为连续的5位数，01234 23456
const ABCDEDetector: PatternDetectorItem = {
    name: 'ABCDE',
    validateFun: (bit: string) => {
        const reg = /^(\d)(\d)(\d)(\d)(\d)$/;
        const res = bit.match(reg);
        if (res) {
            const [_, num1, num2, num3, num4, num5, num6] = res;
            const condition1 = parseInt(num2) - parseInt(num1) === 1;
            const condition2 = parseInt(num3) - parseInt(num2) === 1;
            const condition3 = parseInt(num4) - parseInt(num3) === 1;
            const condition4 = parseInt(num5) - parseInt(num4) === 1;
            return condition1 && condition2 && condition3 && condition4;
        }
        return false;
    },
    subPatternDetectors: []
};

// 需要为连续的6位数，012345 234567
const ABCDEFDetector: PatternDetectorItem = {
    name: 'ABCDEF',
    validateFun: (bit: string) => {
        const reg = /^(\d)(\d)(\d)(\d)(\d)(\d)$/;
        const res = bit.match(reg);
        if (res) {
            const [_, num1, num2, num3, num4, num5, num6] = res;
            const condition1 = parseInt(num2) - parseInt(num1) === 1;
            const condition2 = parseInt(num3) - parseInt(num2) === 1;
            const condition3 = parseInt(num4) - parseInt(num3) === 1;
            const condition4 = parseInt(num5) - parseInt(num4) === 1;
            const condition5 = parseInt(num6) - parseInt(num5) === 1;
            return condition1 && condition2 && condition3 && condition4 && condition5;
        }
        return false;
    },
    subPatternDetectors: []
};

// 动态返回patternName
// AAB AAA等
const commonABCDetector: PatternDetectorItem = {
    name: '',
    validateFun: (bit: string) => {
        if (bit.length > 6) return false; // 过于长的数字不检测
        const res = isCommonDigit(bit);
        const pattern = getABCPattern(bit);
        if (res) {
            // 这几个模式需要特殊处理，要再判断一下是不是递增
            // 123属于ABC，但是136不属于ABC
            if (['ABC', 'ABCD', 'ABCDE', 'ABCDEF'].includes(pattern) && !checkDigitalIncrease(bit, 1)) {
                return false;
            }
            return {
                patternName: getABCPattern(bit)
            };
        }
        return false;
    },
    subPatternDetectors: []
};

export { commonABCDetector };
