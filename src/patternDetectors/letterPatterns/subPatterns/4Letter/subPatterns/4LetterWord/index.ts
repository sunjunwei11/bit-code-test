import { word4Letter } from './word';
import { PatternDetectorItem } from '../../../../../../types';

const is4LetterWordDetector: PatternDetectorItem = {
    name: '4L_Word',
    validateFun: (bit: string) => {
        return word4Letter.includes(bit);
    },
    subPatternDetectors: []
};

export { is4LetterWordDetector };
