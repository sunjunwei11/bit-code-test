import { detectPatterns as dp } from '../src';

// 检测字母
describe('Detect Letter', () => {
    // 检测3位数的字母
    test('Detect 3 number Letters', () => {
        expect(dp('ABC.bit')).toBe(String(['3Letter', 'Letter']));
        expect(dp('QQW.bit')).toBe(String(['AAB', '3Letter', 'Letter']));
        expect(dp('PPP.bit')).toBe(String(['AAA', '3Letter', 'Letter']));
        expect(dp('APP.bit')).toBe(String(['ABB', '3Letter', 'Letter']));
        expect(dp('POP.bit')).toBe(String(['ABA', '3Letter', 'Letter']));
    });

    // 检测3位数的单词
    test('Detect 3 Letter Word', () => {
        expect(dp('ask.bit')).toBe(String(['3L_Word', '3Letter', 'Letter']));
        expect(dp('fly.bit')).toBe(String(['3L_Word', '3Letter', 'Letter']));
    });

    // 检测4位数的字母
    test('Detect 3 number Letters', () => {
        expect(dp('ABCD.bit')).toBe(String(['4Letter', 'Letter']));
        expect(dp('qqww.bit')).toBe(String(['AABB', '4Letter', 'Letter']));
        expect(dp('qwwq.bit')).toBe(String(['ABBA', '4Letter', 'Letter']));
        expect(dp('qqqq.bit')).toBe(String(['AAAA', '4Letter', 'Letter']));
        expect(dp('qqqb.bit')).toBe(String(['AAAB', '4Letter', 'Letter']));
    });

    // 4位数的单词
    test('Detect 4 number Letters', () => {
        expect(dp('look.bit')).toBe(String(['4L_Word', '4Letter', 'Letter']));
        expect(dp('shit.bit')).toBe(String(['4L_Word', '4Letter', 'Letter']));
        expect(dp('loop.bit')).toBe(String(['4L_Word', '4Letter', 'Letter']));
    });

    // 5位数的单词
    test('Detect 5 number Letters', () => {
        expect(dp('happy.bit')).toBe(String(['5L_Word', '5Letter', 'Letter']));
        expect(dp('maybe.bit')).toBe(String(['5L_Word', '5Letter', 'Letter']));
        expect(dp('green.bit')).toBe(String(['5L_Word', '5Letter', 'Letter']));
    });

    // 检查是否是助记词
    test('Detect Mnemonic Letters', () => {
        expect(dp('about.bit')).toBe(String(['Mnemonic', '5L_Word', '5Letter', 'Letter']));
        expect(dp('across.bit')).toBe(String(['Mnemonic', 'Letter']));
        expect(dp('act.bit')).toBe(String(['Mnemonic', '3L_Word', '3Letter', 'Letter']));
    });

    // 检查0x开头的单字母和双字母
    test('Detect 0x Letters', () => {
        expect(dp('0xc.bit')).toBe(String(['0x1Letter', 'Letter', '1Hex', '0x', 'Digit']));
        expect(dp('0xcd.bit')).toBe(String(['0x2Letter', 'Letter', '2Hex', '0x', 'Digit']));
    });
});
