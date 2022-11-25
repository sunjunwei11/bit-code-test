import { detectPatterns as dp } from '../src';

describe('Detect digital', () => {
    describe('Detect 3 digitals', () => {
        // 判断是否是常规的3位数
        test('Detect Common three digital', () => {
            expect(dp('333.bit')).toBe(String(['AAA', '3D', 'Digit']));
            expect(dp('331.bit')).toBe(String(['AAB', '3D', 'Digit']));
            expect(dp('313.bit')).toBe(String(['ABA', '3D', 'Digit']));
            expect(dp('345.bit')).toBe(String(['ABC', '3D', 'Digit']));
            expect(dp('344.bit')).toBe(String(['ABB', '3D', 'Digit']));
        });

        // 判断是否是度数
        test('Detect degree three digital', () => {
            expect(dp('360°.bit')).toBe(String(['Degrees', '3D', 'Digit']));
            expect(dp('001°.bit')).toBe(String(['Degrees', '3D', 'Digit']));
            expect(dp('160°.bit')).toBe(String(['Degrees', '3D', 'Digit']));
        });

        // 判断日语3位数
        test('Detect Japanese three digital', () => {
            expect(dp('零陸参.bit')).toBe(String(['Japanese3D', '3D', 'Digit']));
            expect(dp('壱漆零.bit')).toBe(String(['Japanese3D', '3D', 'Digit']));
            expect(dp('弐玖陸.bit')).toBe(String(['Japanese3D', '3D', 'Digit']));
        });

        // 判断中文3位数
        test('Detect Chinese three digital', () => {
            expect(dp('零六七.bit')).toBe(String(['Chinese3D', '3D', 'Digit']));
            expect(dp('一七三.bit')).toBe(String(['Chinese3D', '3D', 'Digit']));
            expect(dp('三七五.bit')).toBe(String(['Chinese3D', '3D', 'Digit']));
        });

        // 判断是否是国旗3位数
        test('Detect Natioonal Flag three digital', () => {
            expect(dp('🇺🇸177.bit')).toBe(String(['Flag3D', '3D', 'Digit']));
            expect(dp('🇨🇳550.bit')).toBe(String(['Flag3D', '3D', 'Digit']));
            expect(dp('🇺🇳293.bit')).toBe(String(['Flag3D', '3D', 'Digit']));
        });
    });

    describe('Detect 4 digitals', () => {
        // 判断是否是常规的4位数
        test('Detect Common three digital', () => {
            expect(dp('3333.bit')).toBe(String(['AAAA', '10K', '4D', 'Digit']));
            expect(dp('3331.bit')).toBe(String(['AAAB', '10K', '4D', 'Digit']));
            expect(dp('3133.bit')).toBe(String(['ABAA', '10K', '4D', 'Digit']));
            expect(dp('3435.bit')).toBe(String(['ABAC', '10K', '4D', 'Digit']));
            expect(dp('3444.bit')).toBe(String(['ABBB', '10K', '4D', 'Digit']));
            expect(dp('3344.bit')).toBe(String(['AABB', '10K', '4D', 'Digit']));
            expect(dp('3456.bit')).toBe(String(['ABCD', '10K', '4D', 'Digit']));
        });

        // 判断00XX类型的模式
        test('Detect 00XX digital', () => {
            expect(dp('0167.bit')).toBe(String(['0XXX', '10K', '4D', 'Digit']));
            expect(dp('0031.bit')).toBe(String(['AABC', '00XX', '10K', '4D', 'Digit']));
            expect(dp('0606.bit')).toBe(String(['ABAB', 'Birthday', '0X0X', '10K', '4D', 'Digit']));
            expect(dp('0660.bit')).toBe(String(['ABBA', '0XX0', '10K', '4D', 'Digit']));
            expect(dp('3400.bit')).toBe(String(['ABCC', 'XX00', '10K', '4D', 'Digit']));
            expect(dp('3688.bit')).toBe(String(['ABCC', 'XX88', '10K', '4D', 'Digit']));
            expect(dp('1169.bit')).toBe(String(['AABC', 'XX69', '10K', '4D', 'Digit']));
        });

        // 判断是不是99乘法表
        test('Detect 99 Multiplication Table', () => {
            expect(dp('1101.bit')).toBe(String(['AABA', 'Birthday', '99Mul', '10K', '4D', 'Digit']));
            expect(dp('4728.bit')).toBe(String(['99Mul', '10K', '4D', 'Digit']));
            expect(dp('3515.bit')).toBe(String(['ABCB', '99Mul', '10K', '4D', 'Digit']));
            expect(dp('9981.bit')).toBe(String(['AABC', '99Mul', '10K', '4D', 'Digit']));
        });

        // 判断是否是生日号码
        test('Detect Birthday number', () => {
            expect(dp('1101.bit')).toBe(String(['AABA', 'Birthday', '99Mul', '10K', '4D', 'Digit']));
            expect(dp('0328.bit')).toBe(String(['Birthday', '0XXX', '10K', '4D', 'Digit']));
            expect(dp('0611.bit')).toBe(String(['ABCC', 'Birthday', '0XXX', '10K', '4D', 'Digit']));
            expect(dp('1135.bit')).toBe(String(['AABC', '10K', '4D', 'Digit']));
        });

        // 判断中文4位数
        test('Detect Chinese four digital', () => {
            expect(dp('零六七一.bit')).toBe(String(['Chinese4D', '4D', 'Digit']));
            expect(dp('一七三一.bit')).toBe(String(['Chinese4D', '4D', 'Digit']));
            expect(dp('三七五一.bit')).toBe(String(['Chinese4D', '4D', 'Digit']));
        });
    });

    // 判断5位数字
    describe('Detect 5 digitals', () => {
        // 判断是否是常规的5位数以及100K规则
        test('Detect Common three digital', () => {
            expect(dp('33333.bit')).toBe(String(['AAAAA', '100K', '5D', 'Digit']));
            expect(dp('34444.bit')).toBe(String(['ABBBB', '100K', '5D', 'Digit']));
            expect(dp('33444.bit')).toBe(String(['AABBB', '100K', '5D', 'Digit']));
            expect(dp('33344.bit')).toBe(String(['AAABB', '100K', '5D', 'Digit']));
            expect(dp('33334.bit')).toBe(String(['AAAAB', '100K', '5D', 'Digit']));
            expect(dp('34455.bit')).toBe(String(['ABBCC', '100K', '5D', 'Digit']));
            expect(dp('34567.bit')).toBe(String(['ABCDE', '100K', '5D', 'Digit']));
            expect(dp('34568.bit')).toBe(String(['100K', '5D', 'Digit']));
            expect(dp('34456.bit')).toBe(String(['ABBCD', '100K', '5D', 'Digit']));
        });

        // 00XX0相关模式的检测
        test('Detect 0X digital', () => {
            expect(dp('00330.bit')).toBe(String(['AABBA', '00XX0', '100K', '5D', 'Digit']));
            expect(dp('03330.bit')).toBe(String(['ABBBA', '0XXX0', '100K', '5D', 'Digit']));
            expect(dp('03030.bit')).toBe(String(['ABABA', '0X0X0', '100K', '5D', 'Digit']));
            expect(dp('03300.bit')).toBe(String(['ABBAA', '0XX00', '100K', '5D', 'Digit']));
            expect(dp('69111.bit')).toBe(String(['ABCCC', '69XXX', '100K', '5D', 'Digit']));
            expect(dp('11169.bit')).toBe(String(['AAABC', 'XXX69', '100K', '5D', 'Digit']));
            expect(dp('11188.bit')).toBe(String(['AAABB', 'XXX88', '100K', '5D', 'Digit']));
        });
    });

    // 判断6位数字
    describe('Detect 6 digitals', () => {
        // 判断是否是常规的6位数
        test('Detect Common three digital', () => {
            expect(dp('333333.bit')).toBe(String(['AAAAAA', '6D', 'Digit']));
            expect(dp('133333.bit')).toBe(String(['ABBBBB', '6D', 'Digit']));
            expect(dp('113333.bit')).toBe(String(['AABBBB', '6D', 'Digit']));
            expect(dp('333444.bit')).toBe(String(['AAABBB', '6D', 'Digit']));
            expect(dp('333334.bit')).toBe(String(['AAAAAB', '6D', 'Digit']));
            expect(dp('345345.bit')).toBe(String(['ABCABC', '6D', 'Digit']));
            expect(dp('345678.bit')).toBe(String(['ABCDEF', '6D', 'Digit']));
            expect(dp('345677.bit')).toBe(String(['ABCDEE', '6D', 'Digit']));
        });

        // 判断0X相关的Pattern
        test('Detect 0X digital', () => {
            expect(dp('000123.bit')).toBe(String(['AAABCD', '000XXX', '6D', 'Digit']));
            expect(dp('126000.bit')).toBe(String(['ABCDDD', 'XXX000', '6D', 'Digit']));
            expect(dp('123420.bit')).toBe(String(['ABCDBE', 'XXX420', '6D', 'Digit']));
            expect(dp('420111.bit')).toBe(String(['ABCDDD', '420XXX', '6D', 'Digit']));
        });

        // 判断是否是A股代码
        test('Detect A-Share digital', () => {
            expect(dp('603999.bit')).toBe(String(['ABCDDD', 'A-Share', '6D', 'Digit']));
            expect(dp('603975.bit')).toBe(String(['A-Share', '6D', 'Digit']));
            expect(dp('603897.bit')).toBe(String(['A-Share', '6D', 'Digit']));
            expect(dp('112210.bit')).toBe(String(['AABBAC', '6D', 'Digit']));
        });
    });

    // 判断6位以上数字
    describe('Detect Above 6 digitals', () => {
        test('Detect Common >6 digitals', () => {
            expect(dp('6039991.bit')).toBe(String(['>6D', 'Digit']));
            expect(dp('1111111.bit')).toBe(String(['AAAAAAA', '>6D', 'Digit']));
            expect(dp('3111111.bit')).toBe(String(['ABBBBBB', '>6D', 'Digit']));
            expect(dp('1112222.bit')).toBe(String(['AAABBBB', '>6D', 'Digit']));
            expect(dp('1111122222.bit')).toBe(String(['AAAAABBBBB', '>6D', 'Digit']));
            expect(dp('111332222.bit')).toBe(String(['>6D', 'Digit']));
        });

        // 判断豹子手机号
        test('Detect Leopard phone number', () => {
            expect(dp('18622222222.bit')).toBe(String(['LeopardPhoneNumber', '>6D', 'Digit']));
            expect(dp('15300000000.bit')).toBe(String(['LeopardPhoneNumber', '>6D', 'Digit']));
            expect(dp('18799999999.bit')).toBe(String(['LeopardPhoneNumber', '>6D', 'Digit']));
            expect(dp('11199999999.bit')).toBe(String(['>6D', 'Digit']));
        });
    });

    // 判断0x开头的16进制数, Hex是有字母的16禁制数
    describe('Detect 0x digitals', () => {
        test('Detect 0x digital', () => {
            expect(dp('0x1.bit')).toBe(String(['1Hex', '0x9', '0x', 'Digit']));
            expect(dp('0x13.bit')).toBe(String(['2Hex', '0x99', '0x', 'Digit']));
            expect(dp('0x135.bit')).toBe(String(['3Hex', '0x999', '0x', 'Digit']));
            expect(dp('0x1356.bit')).toBe(String(['3Hex', '0x10K', '0x', 'Digit']));
            expect(dp('0xf.bit')).toBe(String(['0x1Letter', 'Letter', '1Hex', '0x', 'Digit']));
            expect(dp('0x3f.bit')).toBe(String(['2Hex', '0x', 'Digit']));
            expect(dp('0x6bb.bit')).toBe(String(['3Hex', '0x', 'Digit']));
            expect(dp('0x6bbf.bit')).toBe(String(['3Hex', '0x', 'Digit']));
        });
    });
});
