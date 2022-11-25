import { detectPatterns as dp } from '../src';

// 检测name
describe('Detect Name', () => {
    // 检测常用的中文名
    test('Detect Common Chinese Name', () => {
        expect(dp('张三.bit')).toBe(String(['commonChineseName', 'chineseName2Word']));
        expect(dp('李四.bit')).toBe(String(['commonChineseName', 'chineseName2Word']));
        expect(dp('王五.bit')).toBe(String(['commonChineseName', 'chineseName2Word']));
        expect(dp('赵六.bit')).toBe(String(['commonChineseName', 'chineseName2Word']));
    });

    // 检测常用的英文名
    test('Detect Common Chinese Name', () => {
        expect(dp('Jack.bit')).toBe(String(['commonEnglishName', '4Letter', 'Letter']));
        expect(dp('Lucy.bit')).toBe(String(['commonEnglishName', '4Letter', 'Letter']));
        expect(dp('Lily.bit')).toBe(String(['commonEnglishName', '4Letter', 'Letter']));
        expect(dp('Mary.bit')).toBe(String(['commonEnglishName', '4Letter', 'Letter']));
    });

    // 检测中文名字数
    test('Detect Common Chinese Name', () => {
        expect(dp('孙尚香.bit')).toBe(String(['chineseName3Word']));
        expect(dp('李亮.bit')).toBe(String(['chineseName2Word']));
        expect(dp('张三丰收.bit')).toBe(String(['chineseName4Word']));
        expect(dp('张三丰收哈哈.bit')).toBe(String([]));
    });

    // 检测中文姓
    test('Detect Common Chinese Name', () => {
        expect(dp('孙.bit')).toBe(String(['chineseSurname']));
        expect(dp('李.bit')).toBe(String(['chineseSurname']));
        expect(dp('张.bit')).toBe(String(['chineseSurname']));
    });
});
