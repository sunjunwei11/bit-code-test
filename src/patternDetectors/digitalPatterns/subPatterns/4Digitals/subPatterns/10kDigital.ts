import { PatternDetectorItem } from '../../../../../types';
import { is10kDigit } from '../validators';

const is10k: PatternDetectorItem = {
    name: '10K',
    validateFun: (bit: string): boolean => {
        return is10kDigit(bit);
    },
    subPatternDetectors: []
};

export { is10k };
