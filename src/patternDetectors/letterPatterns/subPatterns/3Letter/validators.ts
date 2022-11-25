import { isCommonLetter } from '../../validator';

const is3Letter = (bit: string): boolean => {
    return isCommonLetter(bit, 3);
};

export * from '../../validator';

export default is3Letter;
