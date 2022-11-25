import { PatternDetectorItem } from '../../../../../types';
import { is99Multiplication } from '../validators';

// 判断是否是99乘法表的数字
const is99MultiplicationTable: PatternDetectorItem = {
    name: '99Mul',
    validateFun: (bit: string): boolean => {
        return is99Multiplication(bit);
    },
    subPatternDetectors: []
};

export { is99MultiplicationTable };
