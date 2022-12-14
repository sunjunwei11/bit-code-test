# bit-code-test

## 如何执行测试

1. first install npm packages

```js
npm install
```

2. then run test

```js
npm run test
```

## 架构说明

1、测试相关脚本都放在 test 目录下，目前有数字检测、字母检测、emoji 检测、名字检测

```js
|-- test
    |-- digital.test.ts
    |-- emoji.test.ts
    |-- letter.test.ts
    |-- name.test.ts
```

2、pattern 检测器都放在 patternDetectors 目录下

```js
|-- patternDetectors
    |-- digitalPatterns
    |-- emojiPatterns
    |-- letterPatterns
    |-- namePatterns
```

最外层的检测器保存在一个大的数组中，比如

```js
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
```

这个数组里面的每个 Item 都是一个检测器，用于检测相关的 Pattern，检测器的定义如下：

```js
interface validateFunReturnName {
    patternName: string;
}
type validateFunReturn = boolean | validateFunReturnName;

interface PatternDetectorItem {
    name: string;
    validateFun: (bit: string) => validateFunReturn;
    subPatternDetectors: PatternDetectorItem[];
}
```

### validateFun 返回 boolean

其中 validateFun 用来校验该 bit 是否符合该检测器的规则，如果返回 true 则将 name 作为 pattern，添加到最终要返回的 pattern 数组中

### validateFun 返回对象（根据匹配结果，动态得到 patternName）

同时 validateFun 除了可以返回布尔值之外还可以返回对象，如下：

```
interface validateFunReturnName {
    patternName: string;
}
```

如果返回的是对象，则采用对象里的 patternName 作为 pattern 添加到要返回的 pattern 数组中，优先级高于 name，用这种方式可以在 validateFun 中动态生成 patternName。
digitalPatterns 里的 AABB、ABBC 等相关 pattern 的生成使用了此方法，namePatterns 里 name 长度相关的 pattern 也使用了此方法。

### name 为空字符串

name 可以为空字符串，这时候如果 validateFun 返回一个对象里面有 patternName 则将该 patternName 添加到要返回的 pattern 数组中，否则不添加。

我们可以将 name 设置为空字符串，然后 validateFun 直接返回 true，这种情况一般用于该检测器不需要添加 pattern，但是它的子检测器需要添加 pattern，该检测器只是作为一个空容器的作用，类似于 Vue 里的`<template></template>`。

## 子检测器

每一个检测器都有一个 subPatternDetectors 属性，保存他的所有子检测器，比如 digitalDetector：

```js
const digitalDetector: PatternDetectorItem = {
    name: 'Digit',
    validateFun: (bit: string): boolean => {
        return isDigit(bit);
    },
    subPatternDetectors: [
        threeDigitalDetector, // 三位数字相关检测
        fourDigitalDetector, // 四位数字相关检测
        fiveDigitalDetector, // 五位数字相关检测
        sixDigitalDetector, // 6位数字相关检测
        moreThanSixDigitalDetector, // 超过6位数字相关检测
        is0xDigitalDetector, // 检测0x开头的16进制数
        commonDigitalDetector // 通用的数字检测规则，比如AAB、AABB这种Pattern
    ]
};
```

digitalDetector 有很多子检测器，每个子检测器用于检测更细分的 pattern，比如 threeDigitalDetector 做三位数字相关检测，fourDigitalDetector 做四位数相关检测，commonDigitalDetector 做一些和位数关系不大，比较通用的一些检测。

## 检测器嵌套

子检测器里面又可以嵌套检测器，这个过程是可以无限递归下去的，取决于项目的复杂度是否需要拆分更细的检测器出来，比如 threeDigitalDetector 如下：

```js
const threeDigitalDetector: PatternDetectorItem = {
    name: '3D',
    validateFun: (bit: string): boolean => {
        return is3Digital(bit);
    },
    subPatternDetectors: [degreeDetector, isChinese3D, isJapanese3D, isFlag3D]
};
```

threeDigitalDetector 又包含了度数检测器、中文数字检测器，日语数字检测器、国旗+数字检测器。

其中当检测器的 validateFun 返回 false 的时候，不会再递归使用 subPatternDetectors 进行检测，避免性能的浪费。

# 新增检测器

如果有新增的 pattern 需要检测，只需要新增检测器或者子检测器。
