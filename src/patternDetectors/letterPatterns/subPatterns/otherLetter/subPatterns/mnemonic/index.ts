import { mnemonicWord } from './word';
import { PatternDetectorItem } from '../../../../../../types';

// 检测是否是助记词
const isMnemonicWordDetector: PatternDetectorItem = {
    name: 'Mnemonic',
    validateFun: (bit: string) => {
        return mnemonicWord.includes(bit);
    },
    subPatternDetectors: []
};

export { isMnemonicWordDetector };
