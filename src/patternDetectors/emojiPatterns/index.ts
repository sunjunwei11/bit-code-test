import { isEmoji } from './validator';
import {
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
} from './subPatterns';
import { PatternDetectorItem } from '../../types';

const emojiDetector: PatternDetectorItem = {
    name: 'Emoji',
    validateFun: (bit: string): boolean => {
        return isEmoji(bit);
    },
    subPatternDetectors: [
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
    ]
};

export default emojiDetector;
