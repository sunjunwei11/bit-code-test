import { PatternDetectorItem } from '../../../types';
import { repeatAnimals, repeatFoods, repeatFlags, repeatAllEmoji } from '../validator';

const nameToValidator = {
    SigleEmoji: (bit: string) => repeatAllEmoji(bit, 1),
    '2RepeatEmoji': (bit: string) => repeatAllEmoji(bit, 2),
    '3RepeatEmoji': (bit: string) => repeatAllEmoji(bit, 3),
    '4RepeatEmoji': (bit: string) => repeatAllEmoji(bit, 4),
    '5RepeatEmoji': (bit: string) => repeatAllEmoji(bit, 5),
    '6RepeatEmoji': (bit: string) => repeatAllEmoji(bit, 6),
    '2RepeatAnimalEmoji': (bit: string) => repeatAnimals(bit, 2),
    '3RepeatAnimalEmoji': (bit: string) => repeatAnimals(bit, 3),
    '4RepeatAnimalEmoji': (bit: string) => repeatAnimals(bit, 4),
    '5RepeatAnimalEmoji': (bit: string) => repeatAnimals(bit, 5),
    '6RepeatAnimalEmoji': (bit: string) => repeatAnimals(bit, 6),
    '2RepeatFoodEmoji': (bit: string) => repeatFoods(bit, 2),
    '3RepeatFoodEmoji': (bit: string) => repeatFoods(bit, 3),
    '4RepeatFoodEmoji': (bit: string) => repeatFoods(bit, 4),
    '5RepeatFoodEmoji': (bit: string) => repeatFoods(bit, 5),
    '6RepeatFoodEmoji': (bit: string) => repeatFoods(bit, 6),
    '2RepeatFlagEmoji': (bit: string) => repeatFlags(bit, 2),
    '3RepeatFlagEmoji': (bit: string) => repeatFlags(bit, 3),
    '4RepeatFlagEmoji': (bit: string) => repeatFlags(bit, 4),
    '5RepeatFlagEmoji': (bit: string) => repeatFlags(bit, 5),
    '6RepeatFlagEmoji': (bit: string) => repeatFlags(bit, 6)
};

function getDetectorbyName(name: string): PatternDetectorItem {
    return {
        name,
        validateFun: (bit: string) => {
            const validator = nameToValidator[name];
            if (validator) {
                return validator(bit);
            }
            return false;
        },
        subPatternDetectors: []
    };
}

const isSingleEmojiDetector: PatternDetectorItem = getDetectorbyName('SigleEmoji'); // 全部单个Emoji

const is2RepeatEmojiDetector: PatternDetectorItem = getDetectorbyName('2RepeatEmoji'); // 全部双重Emoji
const is3RepeatEmojiDetector: PatternDetectorItem = getDetectorbyName('3RepeatEmoji'); // 全部三重Emoji
const is4RepeatEmojiDetector: PatternDetectorItem = getDetectorbyName('4RepeatEmoji'); // 全部四重Emoji
const is5RepeatEmojiDetector: PatternDetectorItem = getDetectorbyName('5RepeatEmoji'); // 全部五重Emoji
const is6RepeatEmojiDetector: PatternDetectorItem = getDetectorbyName('6RepeatEmoji'); // 全部六重Emoji

const is2RepeatAnimalEmojiDetector: PatternDetectorItem = getDetectorbyName('2RepeatAnimalEmoji'); // 全部双重动物Emoji
const is3RepeatAnimalEmojiDetector: PatternDetectorItem = getDetectorbyName('3RepeatAnimalEmoji'); // 全部三重动物Emoji
const is4RepeatAnimalEmojiDetector: PatternDetectorItem = getDetectorbyName('4RepeatAnimalEmoji'); // 全部四重动物Emoji
const is5RepeatAnimalEmojiDetector: PatternDetectorItem = getDetectorbyName('5RepeatAnimalEmoji'); // 全部五重动物Emoji
const is6RepeatAnimalEmojiDetector: PatternDetectorItem = getDetectorbyName('6RepeatAnimalEmoji'); // 全部六重动物Emoji

const is2RepeatFoodEmojiDetector: PatternDetectorItem = getDetectorbyName('2RepeatFoodEmoji'); // 全部双重食物Emoji
const is3RepeatFoodEmojiDetector: PatternDetectorItem = getDetectorbyName('3RepeatFoodEmoji'); // 全部三重食物Emoji
const is4RepeatFoodEmojiDetector: PatternDetectorItem = getDetectorbyName('4RepeatFoodEmoji'); // 全部四重食物Emoji
const is5RepeatFoodEmojiDetector: PatternDetectorItem = getDetectorbyName('5RepeatFoodEmoji'); // 全部五重食物Emoji
const is6RepeatFoodEmojiDetector: PatternDetectorItem = getDetectorbyName('6RepeatFoodEmoji'); // 全部六重食物Emoji

const is2RepeatFlagEmojiDetector: PatternDetectorItem = getDetectorbyName('2RepeatFlagEmoji'); // 全部双重国旗Emoji
const is3RepeatFlagEmojiDetector: PatternDetectorItem = getDetectorbyName('3RepeatFlagEmoji'); // 全部三重国旗Emoji
const is4RepeatFlagEmojiDetector: PatternDetectorItem = getDetectorbyName('4RepeatFlagEmoji'); // 全部四重国旗Emoji
const is5RepeatFlagEmojiDetector: PatternDetectorItem = getDetectorbyName('5RepeatFlagEmoji'); // 全部五重国旗Emoji
const is6RepeatFlagEmojiDetector: PatternDetectorItem = getDetectorbyName('6RepeatFlagEmoji'); // 全部六重国旗Emoji

export {
    isSingleEmojiDetector,
    is2RepeatEmojiDetector,
    is3RepeatEmojiDetector,
    is4RepeatEmojiDetector,
    is5RepeatEmojiDetector,
    is6RepeatEmojiDetector,
    is2RepeatAnimalEmojiDetector,
    is3RepeatAnimalEmojiDetector,
    is4RepeatAnimalEmojiDetector,
    is5RepeatAnimalEmojiDetector,
    is6RepeatAnimalEmojiDetector,
    is2RepeatFoodEmojiDetector,
    is3RepeatFoodEmojiDetector,
    is4RepeatFoodEmojiDetector,
    is5RepeatFoodEmojiDetector,
    is6RepeatFoodEmojiDetector,
    is2RepeatFlagEmojiDetector,
    is3RepeatFlagEmojiDetector,
    is4RepeatFlagEmojiDetector,
    is5RepeatFlagEmojiDetector,
    is6RepeatFlagEmojiDetector
};
