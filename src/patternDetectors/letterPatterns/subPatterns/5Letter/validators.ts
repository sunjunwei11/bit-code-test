import { isCommonLetter } from '../../validator';

const is5Letter = (bit: string): boolean => {
    return isCommonLetter(bit, 5);
};

export * from '../../validator';

export default is5Letter;
