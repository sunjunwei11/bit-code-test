import { PatternDetectorItem } from '../../../../types';
import {
    AAAADetector,
    AABBDetector,
    ABBBDetector,
    ABBADetector,
    AAABDetector,
    is4LetterWordDetector
} from './subPatterns';
import is4Letter from './validators';

const fourLetterDetector: PatternDetectorItem = {
    name: '4Letter',
    validateFun: (bit: string): boolean => {
        return is4Letter(bit);
    },
    subPatternDetectors: [
        AAAADetector,
        AABBDetector,
        ABBBDetector,
        ABBADetector,
        AAABDetector,
        is4LetterWordDetector
    ]
};

export default fourLetterDetector;
