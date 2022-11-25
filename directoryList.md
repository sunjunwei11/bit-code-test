|-- mygithub
    |-- .gitignore
    |-- .prettierrc
    |-- README.md
    |-- jest.config.js
    |-- package-lock.json
    |-- package.json
    |-- ts-config.json
    |-- src
    |   |-- index.ts
    |   |-- types.ts
    |   |-- utils.ts
    |   |-- patternDetectors
    |       |-- index.ts
    |       |-- digitalPatterns
    |       |   |-- constant.ts
    |       |   |-- index.ts
    |       |   |-- validator.ts
    |       |   |-- subPatterns
    |       |       |-- index.ts
    |       |       |-- 0xDigitals
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- 0xDigit.ts
    |       |       |       |-- index.ts
    |       |       |-- 3Digitals
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- countryNum.ts
    |       |       |       |-- degreeNum.ts
    |       |       |       |-- index.ts
    |       |       |       |-- nationalFlagDigit.ts
    |       |       |-- 4Digitals
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- 0XPattern.ts
    |       |       |       |-- 10kDigital.ts
    |       |       |       |-- 99MultiplicationTable.ts
    |       |       |       |-- birthdayDigital.ts
    |       |       |       |-- countryNum.ts
    |       |       |       |-- index.ts
    |       |       |-- 5Digitals
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- 0XPattern.ts
    |       |       |       |-- 100kDigital.ts
    |       |       |       |-- index.ts
    |       |       |-- 6Digitals
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- constants
    |       |       |   |   |-- AShare.ts
    |       |       |   |   |-- index.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- 0XPattern.ts
    |       |       |       |-- AShare.ts
    |       |       |       |-- index.ts
    |       |       |-- above6Digitals
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- constants
    |       |       |   |   |-- index.ts
    |       |       |   |   |-- leopardPhoneNumber.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- index.ts
    |       |       |       |-- leopardPhoneNumber.ts
    |       |       |       |-- patternABC.ts
    |       |       |-- commonDigitals.ts
    |       |           |-- index.ts
    |       |           |-- patternABC.ts
    |       |-- emojiPatterns
    |       |   |-- index.ts
    |       |   |-- validator.ts
    |       |   |-- emojis
    |       |   |   |-- index.ts
    |       |   |-- subPatterns
    |       |       |-- index.ts
    |       |       |-- repeatEmoji.ts
    |       |-- letterPatterns
    |       |   |-- index.ts
    |       |   |-- validator.ts
    |       |   |-- subPatterns
    |       |       |-- index.ts
    |       |       |-- 3Letter
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- index.ts
    |       |       |       |-- patternABC.ts
    |       |       |       |-- 3LetterWord
    |       |       |           |-- index.ts
    |       |       |           |-- word.ts
    |       |       |-- 4Letter
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- index.ts
    |       |       |       |-- patternABC.ts
    |       |       |       |-- 4LetterWord
    |       |       |           |-- index.ts
    |       |       |           |-- word.ts
    |       |       |-- 5Letter
    |       |       |   |-- index.ts
    |       |       |   |-- validators.ts
    |       |       |   |-- subPatterns
    |       |       |       |-- index.ts
    |       |       |       |-- 5LetterWord
    |       |       |           |-- index.ts
    |       |       |           |-- word.ts
    |       |       |-- otherLetter
    |       |           |-- index.ts
    |       |           |-- subPatterns
    |       |               |-- 0xLetter.ts
    |       |               |-- index.ts
    |       |               |-- mnemonic
    |       |                   |-- index.ts
    |       |                   |-- word.ts
    |       |-- namePatterns
    |           |-- index.ts
    |           |-- validator.ts
    |           |-- names
    |           |   |-- index.ts
    |           |   |-- chinese
    |           |   |   |-- chinesesSurname.ts
    |           |   |   |-- commonChineseName.ts
    |           |   |-- english
    |           |       |-- commonEnglishName.ts
    |           |-- subPatterns
    |               |-- chineseNameDetector.ts
    |               |-- chineseSurnameDetector.ts
    |               |-- commonChineseName.ts
    |               |-- commonEnglishName.ts
    |               |-- index.ts
    |-- test
        |-- digital.test.ts
        |-- emoji.test.ts
        |-- letter.test.ts
        |-- name.test.ts
