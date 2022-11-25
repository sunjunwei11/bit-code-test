import { PatternDetectorItem } from '../types';
import digitalPatternDetector from './digitalPatterns';
import letterDetector from './letterPatterns';
import emojiDetector from './emojiPatterns';
import nameDetector from './namePatterns';

const patternDetectors: PatternDetectorItem[] = [
    digitalPatternDetector,
    letterDetector,
    emojiDetector,
    nameDetector
];

export default patternDetectors;
