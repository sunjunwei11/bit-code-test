import { isCommonLetter } from '../../validator';

const is4Letter = (bit: string): boolean => {
    return isCommonLetter(bit, 4);
};

export * from '../../validator';

export default is4Letter;
