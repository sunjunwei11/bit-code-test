import { getABCPattern, checkDigitalIncrease } from '../src/utils';

// 对util里的一些关键函数进行检测
describe('Detect Util', () => {
    // 检测getABCPattern函数
    test('Test getABCPattern function', () => {
        expect(getABCPattern('111')).toBe('AAA');
        expect(getABCPattern('113')).toBe('AAB');
        expect(getABCPattern('11666')).toBe('AABBB');
        expect(getABCPattern('13131')).toBe('ABABA');
        expect(getABCPattern('111222333')).toBe('AAABBBCCC');
        expect(getABCPattern('123321')).toBe('ABCCBA');
    });

    // 检测checkDigitalIncrease函数，检查数字是否是按要求递增
    test('Test checkDigitalIncrease function', () => {
        expect(checkDigitalIncrease('111')).toBe(false);
        expect(checkDigitalIncrease('12345')).toBe(true);
        expect(checkDigitalIncrease('234')).toBe(true);
        expect(checkDigitalIncrease('356')).toBe(false);
        expect(checkDigitalIncrease('789')).toBe(true);
        expect(checkDigitalIncrease('246', 2)).toBe(true);
        expect(checkDigitalIncrease('369', 2)).toBe(false);
        expect(checkDigitalIncrease('369', 3)).toBe(true);
        expect(checkDigitalIncrease('qqq', 3)).toBe(false);
    });
});
