import { animals, foods, flags, allEmojis } from './emojis';

// emoji的最外层判断
function isEmoji(bit: string): boolean {
    let regString = allEmojis.join('|');
    const reg = new RegExp(`^(${regString})+$`);
    return reg.test(bit);
}

// 重复的Emoji
function repeatEmoji(bit: string, emojis: string[], num?: number): boolean {
    let regString = emojis.join('|');
    const time = num ? `{${num - 1}}` : '{1,}';
    const reg = new RegExp(`^(${regString})\\1${time}$`);
    return reg.test(bit);
}

function repeatAnimals(bit: string, num?: number): boolean {
    return repeatEmoji(bit, animals, num);
}

function repeatFoods(bit: string, num?: number): boolean {
    return repeatEmoji(bit, foods, num);
}

function repeatFlags(bit: string, num?: number): boolean {
    return repeatEmoji(bit, flags, num);
}

function repeatAllEmoji(bit: string, num?: number): boolean {
    return repeatEmoji(bit, allEmojis, num);
}

export { isEmoji, repeatEmoji, repeatAnimals, repeatFoods, repeatFlags, repeatAllEmoji };
