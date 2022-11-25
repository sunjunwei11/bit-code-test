import { detectPatterns as dp } from '../src';

// 检测Emoji
describe('Detect Emoji', () => {
    // 检测Emoji以及Emoji的重复模式
    test('Detect Emoji', () => {
        expect(dp('🏳️‍🌈.bit')).toBe(String(['SigleEmoji', 'Emoji']));
        expect(dp('🏳️‍🌈🏳️‍🌈.bit')).toBe(String(['2RepeatFlagEmoji', '2RepeatEmoji', 'Emoji']));
        expect(dp('🐵🐵🐵.bit')).toBe(String(['3RepeatAnimalEmoji', '3RepeatEmoji', 'Emoji']));
        expect(dp('🍉🍉🍉🍉.bit')).toBe(String(['4RepeatFoodEmoji', '4RepeatEmoji', 'Emoji']));
        expect(dp('🇨🇳🐵.bit')).toBe(String(['Emoji']));
        expect(dp('🦮🦮🦮🦮🦮🦮.bit')).toBe(String(['6RepeatAnimalEmoji', '6RepeatEmoji', 'Emoji']));
        expect(dp('🦮.bit')).toBe(String(['SigleEmoji', 'Emoji']));
        expect(dp('🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮🦮.bit')).toBe(String(['Emoji']));
    });
});
