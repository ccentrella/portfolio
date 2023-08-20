import React, { useState, useEffect } from 'react'

function FormattedTextGenerator() {
  
    useEffect(() => {
        document.title = "Generate Bold and Italic Characters | Chris Centrella";
    }, []);

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isSerif, setIsSerif] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    // Sans-serif fonts
    const outputBold = function () {

        const transformedUpperCase = input
                                      .replaceAll('A', String.fromCodePoint(0x1D5D4 + 0x00))
                                      .replaceAll('B', String.fromCodePoint(0x1D5D4 + 0x01))
                                      .replaceAll('C', String.fromCodePoint(0x1D5D4 + 0x02))
                                      .replaceAll('D', String.fromCodePoint(0x1D5D4 + 0x03))
                                      .replaceAll('E', String.fromCodePoint(0x1D5D4 + 0x04))
                                      .replaceAll('F', String.fromCodePoint(0x1D5D4 + 0x05))
                                      .replaceAll('G', String.fromCodePoint(0x1D5D4 + 0x06))
                                      .replaceAll('H', String.fromCodePoint(0x1D5D4 + 0x07))
                                      .replaceAll('I', String.fromCodePoint(0x1D5D4 + 0x08))
                                      .replaceAll('J', String.fromCodePoint(0x1D5D4 + 0x09))
                                      .replaceAll('K', String.fromCodePoint(0x1D5D4 + 0x0A))
                                      .replaceAll('L', String.fromCodePoint(0x1D5D4 + 0x0B))
                                      .replaceAll('M', String.fromCodePoint(0x1D5D4 + 0x0C))
                                      .replaceAll('N', String.fromCodePoint(0x1D5D4 + 0x0D))
                                      .replaceAll('O', String.fromCodePoint(0x1D5D4 + 0x0E))
                                      .replaceAll('P', String.fromCodePoint(0x1D5D4 + 0x0F))
                                      .replaceAll('Q', String.fromCodePoint(0x1D5D4 + 0x10))
                                      .replaceAll('R', String.fromCodePoint(0x1D5D4 + 0x11))
                                      .replaceAll('S', String.fromCodePoint(0x1D5D4 + 0x12))
                                      .replaceAll('T', String.fromCodePoint(0x1D5D4 + 0x13))
                                      .replaceAll('U', String.fromCodePoint(0x1D5D4 + 0x14))
                                      .replaceAll('V', String.fromCodePoint(0x1D5D4 + 0x15))
                                      .replaceAll('W', String.fromCodePoint(0x1D5D4 + 0x16))
                                      .replaceAll('X', String.fromCodePoint(0x1D5D4 + 0x17))
                                      .replaceAll('Y', String.fromCodePoint(0x1D5D4 + 0x18))
                                      .replaceAll('Z', String.fromCodePoint(0x1D5D4 + 0x19));

        const transformedLowerCase = transformedUpperCase
                                      .replaceAll('a', String.fromCodePoint(0x1D5EE + 0x00))
                                      .replaceAll('b', String.fromCodePoint(0x1D5EE + 0x01))
                                      .replaceAll('c', String.fromCodePoint(0x1D5EE + 0x02))
                                      .replaceAll('d', String.fromCodePoint(0x1D5EE + 0x03))
                                      .replaceAll('e', String.fromCodePoint(0x1D5EE + 0x04))
                                      .replaceAll('f', String.fromCodePoint(0x1D5EE + 0x05))
                                      .replaceAll('g', String.fromCodePoint(0x1D5EE + 0x06))
                                      .replaceAll('h', String.fromCodePoint(0x1D5EE + 0x07))
                                      .replaceAll('i', String.fromCodePoint(0x1D5EE + 0x08))
                                      .replaceAll('j', String.fromCodePoint(0x1D5EE + 0x09))
                                      .replaceAll('k', String.fromCodePoint(0x1D5EE + 0x0A))
                                      .replaceAll('l', String.fromCodePoint(0x1D5EE + 0x0B))
                                      .replaceAll('m', String.fromCodePoint(0x1D5EE + 0x0C))
                                      .replaceAll('n', String.fromCodePoint(0x1D5EE + 0x0D))
                                      .replaceAll('o', String.fromCodePoint(0x1D5EE + 0x0E))
                                      .replaceAll('p', String.fromCodePoint(0x1D5EE + 0x0F))
                                      .replaceAll('q', String.fromCodePoint(0x1D5EE + 0x10))
                                      .replaceAll('r', String.fromCodePoint(0x1D5EE + 0x11))
                                      .replaceAll('s', String.fromCodePoint(0x1D5EE + 0x12))
                                      .replaceAll('t', String.fromCodePoint(0x1D5EE + 0x13))
                                      .replaceAll('u', String.fromCodePoint(0x1D5EE + 0x14))
                                      .replaceAll('v', String.fromCodePoint(0x1D5EE + 0x15))
                                      .replaceAll('w', String.fromCodePoint(0x1D5EE + 0x16))
                                      .replaceAll('x', String.fromCodePoint(0x1D5EE + 0x17))
                                      .replaceAll('y', String.fromCodePoint(0x1D5EE + 0x18))
                                      .replaceAll('z', String.fromCodePoint(0x1D5EE + 0x19));

        const transformedDigits = transformedLowerCase
                                   .replaceAll('0', String.fromCodePoint(0x1D7EC + 0x00))
                                   .replaceAll('1', String.fromCodePoint(0x1D7EC + 0x01))
                                   .replaceAll('2', String.fromCodePoint(0x1D7EC + 0x02))
                                   .replaceAll('3', String.fromCodePoint(0x1D7EC + 0x03))
                                   .replaceAll('4', String.fromCodePoint(0x1D7EC + 0x04))
                                   .replaceAll('5', String.fromCodePoint(0x1D7EC + 0x05))
                                   .replaceAll('6', String.fromCodePoint(0x1D7EC + 0x06))
                                   .replaceAll('7', String.fromCodePoint(0x1D7EC + 0x07))
                                   .replaceAll('8', String.fromCodePoint(0x1D7EC + 0x08))
                                   .replaceAll('9', String.fromCodePoint(0x1D7EC + 0x09));

        return transformedDigits;
    }

    const outputItalic = function () {

        // Check for warnings
        const digits = input.search("[0-9]")
        digits != -1 && setErrorMessages(current=>
            [...current, "Due to unicode limitations, digits have not been italicized."]
        )   

        const transformedUpperCase = input
                                      .replaceAll('A', String.fromCodePoint(0x1D608 + 0x00))
                                      .replaceAll('B', String.fromCodePoint(0x1D608 + 0x01))
                                      .replaceAll('C', String.fromCodePoint(0x1D608 + 0x02))
                                      .replaceAll('D', String.fromCodePoint(0x1D608 + 0x03))
                                      .replaceAll('E', String.fromCodePoint(0x1D608 + 0x04))
                                      .replaceAll('F', String.fromCodePoint(0x1D608 + 0x05))
                                      .replaceAll('G', String.fromCodePoint(0x1D608 + 0x06))
                                      .replaceAll('H', String.fromCodePoint(0x1D608 + 0x07))
                                      .replaceAll('I', String.fromCodePoint(0x1D608 + 0x08))
                                      .replaceAll('J', String.fromCodePoint(0x1D608 + 0x09))
                                      .replaceAll('K', String.fromCodePoint(0x1D608 + 0x0A))
                                      .replaceAll('L', String.fromCodePoint(0x1D608 + 0x0B))
                                      .replaceAll('M', String.fromCodePoint(0x1D608 + 0x0C))
                                      .replaceAll('N', String.fromCodePoint(0x1D608 + 0x0D))
                                      .replaceAll('O', String.fromCodePoint(0x1D608 + 0x0E))
                                      .replaceAll('P', String.fromCodePoint(0x1D608 + 0x0F))
                                      .replaceAll('Q', String.fromCodePoint(0x1D608 + 0x10))
                                      .replaceAll('R', String.fromCodePoint(0x1D608 + 0x11))
                                      .replaceAll('S', String.fromCodePoint(0x1D608 + 0x12))
                                      .replaceAll('T', String.fromCodePoint(0x1D608 + 0x13))
                                      .replaceAll('U', String.fromCodePoint(0x1D608 + 0x14))
                                      .replaceAll('V', String.fromCodePoint(0x1D608 + 0x15))
                                      .replaceAll('W', String.fromCodePoint(0x1D608 + 0x16))
                                      .replaceAll('X', String.fromCodePoint(0x1D608 + 0x17))
                                      .replaceAll('Y', String.fromCodePoint(0x1D608 + 0x18))
                                      .replaceAll('Z', String.fromCodePoint(0x1D608 + 0x19));
        
        const transformedLowerCase = transformedUpperCase
                                      .replaceAll('a', String.fromCodePoint(0x1D622 + 0x00))
                                      .replaceAll('b', String.fromCodePoint(0x1D622 + 0x01))
                                      .replaceAll('c', String.fromCodePoint(0x1D622 + 0x02))
                                      .replaceAll('d', String.fromCodePoint(0x1D622 + 0x03))
                                      .replaceAll('e', String.fromCodePoint(0x1D622 + 0x04))
                                      .replaceAll('f', String.fromCodePoint(0x1D622 + 0x05))
                                      .replaceAll('g', String.fromCodePoint(0x1D622 + 0x06))
                                      .replaceAll('h', String.fromCodePoint(0x1D622 + 0x07))
                                      .replaceAll('i', String.fromCodePoint(0x1D622 + 0x08))
                                      .replaceAll('j', String.fromCodePoint(0x1D622 + 0x09))
                                      .replaceAll('k', String.fromCodePoint(0x1D622 + 0x0A))
                                      .replaceAll('l', String.fromCodePoint(0x1D622 + 0x0B))
                                      .replaceAll('m', String.fromCodePoint(0x1D622 + 0x0C))
                                      .replaceAll('n', String.fromCodePoint(0x1D622 + 0x0D))
                                      .replaceAll('o', String.fromCodePoint(0x1D622 + 0x0E))
                                      .replaceAll('p', String.fromCodePoint(0x1D622 + 0x0F))
                                      .replaceAll('q', String.fromCodePoint(0x1D622 + 0x10))
                                      .replaceAll('r', String.fromCodePoint(0x1D622 + 0x11))
                                      .replaceAll('s', String.fromCodePoint(0x1D622 + 0x12))
                                      .replaceAll('t', String.fromCodePoint(0x1D622 + 0x13))
                                      .replaceAll('u', String.fromCodePoint(0x1D622 + 0x14))
                                      .replaceAll('v', String.fromCodePoint(0x1D622 + 0x15))
                                      .replaceAll('w', String.fromCodePoint(0x1D622 + 0x16))
                                      .replaceAll('x', String.fromCodePoint(0x1D622 + 0x17))
                                      .replaceAll('y', String.fromCodePoint(0x1D622 + 0x18))
                                      .replaceAll('z', String.fromCodePoint(0x1D622 + 0x19));
        
        // Transform to normal digits because italicized digits do not exist
        // Because style is slightly different, perform transform anyway
        const transformedDigits = transformedLowerCase
                                   .replaceAll('0', String.fromCodePoint(0x1D7E2 + 0x00))
                                   .replaceAll('1', String.fromCodePoint(0x1D7E2 + 0x01))
                                   .replaceAll('2', String.fromCodePoint(0x1D7E2 + 0x02))
                                   .replaceAll('3', String.fromCodePoint(0x1D7E2 + 0x03))
                                   .replaceAll('4', String.fromCodePoint(0x1D7E2 + 0x04))
                                   .replaceAll('5', String.fromCodePoint(0x1D7E2 + 0x05))
                                   .replaceAll('6', String.fromCodePoint(0x1D7E2 + 0x06))
                                   .replaceAll('7', String.fromCodePoint(0x1D7E2 + 0x07))
                                   .replaceAll('8', String.fromCodePoint(0x1D7E2 + 0x08))
                                   .replaceAll('9', String.fromCodePoint(0x1D7E2 + 0x09));

        return transformedDigits;
    }

    const outputBoldAndItalic = function () {

        // Check for warnings
        const digits = input.search("[0-9]")
        digits != -1 && setErrorMessages(current=>
            [...current, "Due to unicode limitations, digits have not been italicized."]
        )   

        const transformedUpperCase = input
                                      .replaceAll('A', String.fromCodePoint(0x1D63C + 0x00))
                                      .replaceAll('B', String.fromCodePoint(0x1D63C + 0x01))
                                      .replaceAll('C', String.fromCodePoint(0x1D63C + 0x02))
                                      .replaceAll('D', String.fromCodePoint(0x1D63C + 0x03))
                                      .replaceAll('E', String.fromCodePoint(0x1D63C + 0x04))
                                      .replaceAll('F', String.fromCodePoint(0x1D63C + 0x05))
                                      .replaceAll('G', String.fromCodePoint(0x1D63C + 0x06))
                                      .replaceAll('H', String.fromCodePoint(0x1D63C + 0x07))
                                      .replaceAll('I', String.fromCodePoint(0x1D63C + 0x08))
                                      .replaceAll('J', String.fromCodePoint(0x1D63C + 0x09))
                                      .replaceAll('K', String.fromCodePoint(0x1D63C + 0x0A))
                                      .replaceAll('L', String.fromCodePoint(0x1D63C + 0x0B))
                                      .replaceAll('M', String.fromCodePoint(0x1D63C + 0x0C))
                                      .replaceAll('N', String.fromCodePoint(0x1D63C + 0x0D))
                                      .replaceAll('O', String.fromCodePoint(0x1D63C + 0x0E))
                                      .replaceAll('P', String.fromCodePoint(0x1D63C + 0x0F))
                                      .replaceAll('Q', String.fromCodePoint(0x1D63C + 0x10))
                                      .replaceAll('R', String.fromCodePoint(0x1D63C + 0x11))
                                      .replaceAll('S', String.fromCodePoint(0x1D63C + 0x12))
                                      .replaceAll('T', String.fromCodePoint(0x1D63C + 0x13))
                                      .replaceAll('U', String.fromCodePoint(0x1D63C + 0x14))
                                      .replaceAll('V', String.fromCodePoint(0x1D63C + 0x15))
                                      .replaceAll('W', String.fromCodePoint(0x1D63C + 0x16))
                                      .replaceAll('X', String.fromCodePoint(0x1D63C + 0x17))
                                      .replaceAll('Y', String.fromCodePoint(0x1D63C + 0x18))
                                      .replaceAll('Z', String.fromCodePoint(0x1D63C + 0x19));
        
        const transformedLowerCase = transformedUpperCase
                                      .replaceAll('a', String.fromCodePoint(0x1D656 + 0x00))
                                      .replaceAll('b', String.fromCodePoint(0x1D656 + 0x01))
                                      .replaceAll('c', String.fromCodePoint(0x1D656 + 0x02))
                                      .replaceAll('d', String.fromCodePoint(0x1D656 + 0x03))
                                      .replaceAll('e', String.fromCodePoint(0x1D656 + 0x04))
                                      .replaceAll('f', String.fromCodePoint(0x1D656 + 0x05))
                                      .replaceAll('g', String.fromCodePoint(0x1D656 + 0x06))
                                      .replaceAll('h', String.fromCodePoint(0x1D656 + 0x07))
                                      .replaceAll('i', String.fromCodePoint(0x1D656 + 0x08))
                                      .replaceAll('j', String.fromCodePoint(0x1D656 + 0x09))
                                      .replaceAll('k', String.fromCodePoint(0x1D656 + 0x0A))
                                      .replaceAll('l', String.fromCodePoint(0x1D656 + 0x0B))
                                      .replaceAll('m', String.fromCodePoint(0x1D656 + 0x0C))
                                      .replaceAll('n', String.fromCodePoint(0x1D656 + 0x0D))
                                      .replaceAll('o', String.fromCodePoint(0x1D656 + 0x0E))
                                      .replaceAll('p', String.fromCodePoint(0x1D656 + 0x0F))
                                      .replaceAll('q', String.fromCodePoint(0x1D656 + 0x10))
                                      .replaceAll('r', String.fromCodePoint(0x1D656 + 0x11))
                                      .replaceAll('s', String.fromCodePoint(0x1D656 + 0x12))
                                      .replaceAll('t', String.fromCodePoint(0x1D656 + 0x13))
                                      .replaceAll('u', String.fromCodePoint(0x1D656 + 0x14))
                                      .replaceAll('v', String.fromCodePoint(0x1D656 + 0x15))
                                      .replaceAll('w', String.fromCodePoint(0x1D656 + 0x16))
                                      .replaceAll('x', String.fromCodePoint(0x1D656 + 0x17))
                                      .replaceAll('y', String.fromCodePoint(0x1D656 + 0x18))
                                      .replaceAll('z', String.fromCodePoint(0x1D656 + 0x19));

        // Use bold digits because bold italicized digits do not exist                              
        const transformedDigits = transformedLowerCase
                                   .replaceAll('0', String.fromCodePoint(0x1D7EC + 0x00))
                                   .replaceAll('1', String.fromCodePoint(0x1D7EC + 0x01))
                                   .replaceAll('2', String.fromCodePoint(0x1D7EC + 0x02))
                                   .replaceAll('3', String.fromCodePoint(0x1D7EC + 0x03))
                                   .replaceAll('4', String.fromCodePoint(0x1D7EC + 0x04))
                                   .replaceAll('5', String.fromCodePoint(0x1D7EC + 0x05))
                                   .replaceAll('6', String.fromCodePoint(0x1D7EC + 0x06))
                                   .replaceAll('7', String.fromCodePoint(0x1D7EC + 0x07))
                                   .replaceAll('8', String.fromCodePoint(0x1D7EC + 0x08))
                                   .replaceAll('9', String.fromCodePoint(0x1D7EC + 0x09));

        return transformedDigits;
    }

    // Serif fonts
    const outputBoldSerif = function () {

        const transformedUpperCase = input
                                      .replaceAll('A', String.fromCodePoint(0x1D400 + 0x00))
                                      .replaceAll('B', String.fromCodePoint(0x1D400 + 0x01))
                                      .replaceAll('C', String.fromCodePoint(0x1D400 + 0x02))
                                      .replaceAll('D', String.fromCodePoint(0x1D400 + 0x03))
                                      .replaceAll('E', String.fromCodePoint(0x1D400 + 0x04))
                                      .replaceAll('F', String.fromCodePoint(0x1D400 + 0x05))
                                      .replaceAll('G', String.fromCodePoint(0x1D400 + 0x06))
                                      .replaceAll('H', String.fromCodePoint(0x1D400 + 0x07))
                                      .replaceAll('I', String.fromCodePoint(0x1D400 + 0x08))
                                      .replaceAll('J', String.fromCodePoint(0x1D400 + 0x09))
                                      .replaceAll('K', String.fromCodePoint(0x1D400 + 0x0A))
                                      .replaceAll('L', String.fromCodePoint(0x1D400 + 0x0B))
                                      .replaceAll('M', String.fromCodePoint(0x1D400 + 0x0C))
                                      .replaceAll('N', String.fromCodePoint(0x1D400 + 0x0D))
                                      .replaceAll('O', String.fromCodePoint(0x1D400 + 0x0E))
                                      .replaceAll('P', String.fromCodePoint(0x1D400 + 0x0F))
                                      .replaceAll('Q', String.fromCodePoint(0x1D400 + 0x10))
                                      .replaceAll('R', String.fromCodePoint(0x1D400 + 0x11))
                                      .replaceAll('S', String.fromCodePoint(0x1D400 + 0x12))
                                      .replaceAll('T', String.fromCodePoint(0x1D400 + 0x13))
                                      .replaceAll('U', String.fromCodePoint(0x1D400 + 0x14))
                                      .replaceAll('V', String.fromCodePoint(0x1D400 + 0x15))
                                      .replaceAll('W', String.fromCodePoint(0x1D400 + 0x16))
                                      .replaceAll('X', String.fromCodePoint(0x1D400 + 0x17))
                                      .replaceAll('Y', String.fromCodePoint(0x1D400 + 0x18))
                                      .replaceAll('Z', String.fromCodePoint(0x1D400 + 0x19));

        const transformedLowerCase = transformedUpperCase
                                      .replaceAll('a', String.fromCodePoint(0x1D41A + 0x00))
                                      .replaceAll('b', String.fromCodePoint(0x1D41A + 0x01))
                                      .replaceAll('c', String.fromCodePoint(0x1D41A + 0x02))
                                      .replaceAll('d', String.fromCodePoint(0x1D41A + 0x03))
                                      .replaceAll('e', String.fromCodePoint(0x1D41A + 0x04))
                                      .replaceAll('f', String.fromCodePoint(0x1D41A + 0x05))
                                      .replaceAll('g', String.fromCodePoint(0x1D41A + 0x06))
                                      .replaceAll('h', String.fromCodePoint(0x1D41A + 0x07))
                                      .replaceAll('i', String.fromCodePoint(0x1D41A + 0x08))
                                      .replaceAll('j', String.fromCodePoint(0x1D41A + 0x09))
                                      .replaceAll('k', String.fromCodePoint(0x1D41A + 0x0A))
                                      .replaceAll('l', String.fromCodePoint(0x1D41A + 0x0B))
                                      .replaceAll('m', String.fromCodePoint(0x1D41A + 0x0C))
                                      .replaceAll('n', String.fromCodePoint(0x1D41A + 0x0D))
                                      .replaceAll('o', String.fromCodePoint(0x1D41A + 0x0E))
                                      .replaceAll('p', String.fromCodePoint(0x1D41A + 0x0F))
                                      .replaceAll('q', String.fromCodePoint(0x1D41A + 0x10))
                                      .replaceAll('r', String.fromCodePoint(0x1D41A + 0x11))
                                      .replaceAll('s', String.fromCodePoint(0x1D41A + 0x12))
                                      .replaceAll('t', String.fromCodePoint(0x1D41A + 0x13))
                                      .replaceAll('u', String.fromCodePoint(0x1D41A + 0x14))
                                      .replaceAll('v', String.fromCodePoint(0x1D41A + 0x15))
                                      .replaceAll('w', String.fromCodePoint(0x1D41A + 0x16))
                                      .replaceAll('x', String.fromCodePoint(0x1D41A + 0x17))
                                      .replaceAll('y', String.fromCodePoint(0x1D41A + 0x18))
                                      .replaceAll('z', String.fromCodePoint(0x1D41A + 0x19));

        const transformedDigits = transformedLowerCase
                                   .replaceAll('0', String.fromCodePoint(0x1D7CE + 0x00))
                                   .replaceAll('1', String.fromCodePoint(0x1D7CE + 0x01))
                                   .replaceAll('2', String.fromCodePoint(0x1D7CE + 0x02))
                                   .replaceAll('3', String.fromCodePoint(0x1D7CE + 0x03))
                                   .replaceAll('4', String.fromCodePoint(0x1D7CE + 0x04))
                                   .replaceAll('5', String.fromCodePoint(0x1D7CE + 0x05))
                                   .replaceAll('6', String.fromCodePoint(0x1D7CE + 0x06))
                                   .replaceAll('7', String.fromCodePoint(0x1D7CE + 0x07))
                                   .replaceAll('8', String.fromCodePoint(0x1D7CE + 0x08))
                                   .replaceAll('9', String.fromCodePoint(0x1D7CE + 0x09));

        return transformedDigits;
    }

    const outputItalicSerif = function () {

        // Check for warnings
        const digits = input.search("[0-9]")
        digits != -1 && setErrorMessages(current=>
            [...current, "Due to unicode limitations, digits have not been italicized and are not using serifs."]
        )

        if (input.includes("h")) {
            setErrorMessages(current=>
                [...current, "Due to unicode limitations, the italicized h is not using serifs."]
            ) 
        }

        const transformedUpperCase = input
                                      .replaceAll('A', String.fromCodePoint(0x1D434 + 0x00))
                                      .replaceAll('B', String.fromCodePoint(0x1D434 + 0x01))
                                      .replaceAll('C', String.fromCodePoint(0x1D434 + 0x02))
                                      .replaceAll('D', String.fromCodePoint(0x1D434 + 0x03))
                                      .replaceAll('E', String.fromCodePoint(0x1D434 + 0x04))
                                      .replaceAll('F', String.fromCodePoint(0x1D434 + 0x05))
                                      .replaceAll('G', String.fromCodePoint(0x1D434 + 0x06))
                                      .replaceAll('H', String.fromCodePoint(0x1D434 + 0x07))
                                      .replaceAll('I', String.fromCodePoint(0x1D434 + 0x08))
                                      .replaceAll('J', String.fromCodePoint(0x1D434 + 0x09))
                                      .replaceAll('K', String.fromCodePoint(0x1D434 + 0x0A))
                                      .replaceAll('L', String.fromCodePoint(0x1D434 + 0x0B))
                                      .replaceAll('M', String.fromCodePoint(0x1D434 + 0x0C))
                                      .replaceAll('N', String.fromCodePoint(0x1D434 + 0x0D))
                                      .replaceAll('O', String.fromCodePoint(0x1D434 + 0x0E))
                                      .replaceAll('P', String.fromCodePoint(0x1D434 + 0x0F))
                                      .replaceAll('Q', String.fromCodePoint(0x1D434 + 0x10))
                                      .replaceAll('R', String.fromCodePoint(0x1D434 + 0x11))
                                      .replaceAll('S', String.fromCodePoint(0x1D434 + 0x12))
                                      .replaceAll('T', String.fromCodePoint(0x1D434 + 0x13))
                                      .replaceAll('U', String.fromCodePoint(0x1D434 + 0x14))
                                      .replaceAll('V', String.fromCodePoint(0x1D434 + 0x15))
                                      .replaceAll('W', String.fromCodePoint(0x1D434 + 0x16))
                                      .replaceAll('X', String.fromCodePoint(0x1D434 + 0x17))
                                      .replaceAll('Y', String.fromCodePoint(0x1D434 + 0x18))
                                      .replaceAll('Z', String.fromCodePoint(0x1D434 + 0x19));
        
        const transformedLowerCase = transformedUpperCase
                                      .replaceAll('a', String.fromCodePoint(0x1D44E + 0x00))
                                      .replaceAll('b', String.fromCodePoint(0x1D44E + 0x01))
                                      .replaceAll('c', String.fromCodePoint(0x1D44E + 0x02))
                                      .replaceAll('d', String.fromCodePoint(0x1D44E + 0x03))
                                      .replaceAll('e', String.fromCodePoint(0x1D44E + 0x04))
                                      .replaceAll('f', String.fromCodePoint(0x1D44E + 0x05))
                                      .replaceAll('g', String.fromCodePoint(0x1D44E + 0x06))
                                      .replaceAll('h', String.fromCodePoint(0x1D622 + 0x07))
                                      .replaceAll('i', String.fromCodePoint(0x1D44E + 0x08))
                                      .replaceAll('j', String.fromCodePoint(0x1D44E + 0x09))
                                      .replaceAll('k', String.fromCodePoint(0x1D44E + 0x0A))
                                      .replaceAll('l', String.fromCodePoint(0x1D44E + 0x0B))
                                      .replaceAll('m', String.fromCodePoint(0x1D44E + 0x0C))
                                      .replaceAll('n', String.fromCodePoint(0x1D44E + 0x0D))
                                      .replaceAll('o', String.fromCodePoint(0x1D44E + 0x0E))
                                      .replaceAll('p', String.fromCodePoint(0x1D44E + 0x0F))
                                      .replaceAll('q', String.fromCodePoint(0x1D44E + 0x10))
                                      .replaceAll('r', String.fromCodePoint(0x1D44E + 0x11))
                                      .replaceAll('s', String.fromCodePoint(0x1D44E + 0x12))
                                      .replaceAll('t', String.fromCodePoint(0x1D44E + 0x13))
                                      .replaceAll('u', String.fromCodePoint(0x1D44E + 0x14))
                                      .replaceAll('v', String.fromCodePoint(0x1D44E + 0x15))
                                      .replaceAll('w', String.fromCodePoint(0x1D44E + 0x16))
                                      .replaceAll('x', String.fromCodePoint(0x1D44E + 0x17))
                                      .replaceAll('y', String.fromCodePoint(0x1D44E + 0x18))
                                      .replaceAll('z', String.fromCodePoint(0x1D44E + 0x19));
        
        // Transform to normal digits because italicized digits do not exist
        // Because style is slightly different, perform transform anyway
        const transformedDigits = transformedLowerCase
                                   .replaceAll('0', String.fromCodePoint(0x1D7E2 + 0x00))
                                   .replaceAll('1', String.fromCodePoint(0x1D7E2 + 0x01))
                                   .replaceAll('2', String.fromCodePoint(0x1D7E2 + 0x02))
                                   .replaceAll('3', String.fromCodePoint(0x1D7E2 + 0x03))
                                   .replaceAll('4', String.fromCodePoint(0x1D7E2 + 0x04))
                                   .replaceAll('5', String.fromCodePoint(0x1D7E2 + 0x05))
                                   .replaceAll('6', String.fromCodePoint(0x1D7E2 + 0x06))
                                   .replaceAll('7', String.fromCodePoint(0x1D7E2 + 0x07))
                                   .replaceAll('8', String.fromCodePoint(0x1D7E2 + 0x08))
                                   .replaceAll('9', String.fromCodePoint(0x1D7E2 + 0x09));

        return transformedDigits;
    }

    const outputBoldAndItalicSerif = function () {

        // Check for warnings
        const digits = input.search("[0-9]")
        digits != -1 && setErrorMessages(current=>
            [...current, "Due to unicode limitations, digits have not been italicized."]
        )        
        
        const transformedUpperCase = input
                                      .replaceAll('A', String.fromCodePoint(0x1D468 + 0x00))
                                      .replaceAll('B', String.fromCodePoint(0x1D468 + 0x01))
                                      .replaceAll('C', String.fromCodePoint(0x1D468 + 0x02))
                                      .replaceAll('D', String.fromCodePoint(0x1D468 + 0x03))
                                      .replaceAll('E', String.fromCodePoint(0x1D468 + 0x04))
                                      .replaceAll('F', String.fromCodePoint(0x1D468 + 0x05))
                                      .replaceAll('G', String.fromCodePoint(0x1D468 + 0x06))
                                      .replaceAll('H', String.fromCodePoint(0x1D468 + 0x07))
                                      .replaceAll('I', String.fromCodePoint(0x1D468 + 0x08))
                                      .replaceAll('J', String.fromCodePoint(0x1D468 + 0x09))
                                      .replaceAll('K', String.fromCodePoint(0x1D468 + 0x0A))
                                      .replaceAll('L', String.fromCodePoint(0x1D468 + 0x0B))
                                      .replaceAll('M', String.fromCodePoint(0x1D468 + 0x0C))
                                      .replaceAll('N', String.fromCodePoint(0x1D468 + 0x0D))
                                      .replaceAll('O', String.fromCodePoint(0x1D468 + 0x0E))
                                      .replaceAll('P', String.fromCodePoint(0x1D468 + 0x0F))
                                      .replaceAll('Q', String.fromCodePoint(0x1D468 + 0x10))
                                      .replaceAll('R', String.fromCodePoint(0x1D468 + 0x11))
                                      .replaceAll('S', String.fromCodePoint(0x1D468 + 0x12))
                                      .replaceAll('T', String.fromCodePoint(0x1D468 + 0x13))
                                      .replaceAll('U', String.fromCodePoint(0x1D468 + 0x14))
                                      .replaceAll('V', String.fromCodePoint(0x1D468 + 0x15))
                                      .replaceAll('W', String.fromCodePoint(0x1D468 + 0x16))
                                      .replaceAll('X', String.fromCodePoint(0x1D468 + 0x17))
                                      .replaceAll('Y', String.fromCodePoint(0x1D468 + 0x18))
                                      .replaceAll('Z', String.fromCodePoint(0x1D468 + 0x19));
        
        const transformedLowerCase = transformedUpperCase
                                      .replaceAll('a', String.fromCodePoint(0x1D482 + 0x00))
                                      .replaceAll('b', String.fromCodePoint(0x1D482 + 0x01))
                                      .replaceAll('c', String.fromCodePoint(0x1D482 + 0x02))
                                      .replaceAll('d', String.fromCodePoint(0x1D482 + 0x03))
                                      .replaceAll('e', String.fromCodePoint(0x1D482 + 0x04))
                                      .replaceAll('f', String.fromCodePoint(0x1D482 + 0x05))
                                      .replaceAll('g', String.fromCodePoint(0x1D482 + 0x06))
                                      .replaceAll('h', String.fromCodePoint(0x1D482 + 0x07))
                                      .replaceAll('i', String.fromCodePoint(0x1D482 + 0x08))
                                      .replaceAll('j', String.fromCodePoint(0x1D482 + 0x09))
                                      .replaceAll('k', String.fromCodePoint(0x1D482 + 0x0A))
                                      .replaceAll('l', String.fromCodePoint(0x1D482 + 0x0B))
                                      .replaceAll('m', String.fromCodePoint(0x1D482 + 0x0C))
                                      .replaceAll('n', String.fromCodePoint(0x1D482 + 0x0D))
                                      .replaceAll('o', String.fromCodePoint(0x1D482 + 0x0E))
                                      .replaceAll('p', String.fromCodePoint(0x1D482 + 0x0F))
                                      .replaceAll('q', String.fromCodePoint(0x1D482 + 0x10))
                                      .replaceAll('r', String.fromCodePoint(0x1D482 + 0x11))
                                      .replaceAll('s', String.fromCodePoint(0x1D482 + 0x12))
                                      .replaceAll('t', String.fromCodePoint(0x1D482 + 0x13))
                                      .replaceAll('u', String.fromCodePoint(0x1D482 + 0x14))
                                      .replaceAll('v', String.fromCodePoint(0x1D482 + 0x15))
                                      .replaceAll('w', String.fromCodePoint(0x1D482 + 0x16))
                                      .replaceAll('x', String.fromCodePoint(0x1D482 + 0x17))
                                      .replaceAll('y', String.fromCodePoint(0x1D482 + 0x18))
                                      .replaceAll('z', String.fromCodePoint(0x1D482 + 0x19));

        // Use bold digits because bold italicized digits do not exist                              
        const transformedDigits = transformedLowerCase
                                   .replaceAll('0', String.fromCodePoint(0x1D7CE + 0x00))
                                   .replaceAll('1', String.fromCodePoint(0x1D7CE + 0x01))
                                   .replaceAll('2', String.fromCodePoint(0x1D7CE + 0x02))
                                   .replaceAll('3', String.fromCodePoint(0x1D7CE + 0x03))
                                   .replaceAll('4', String.fromCodePoint(0x1D7CE + 0x04))
                                   .replaceAll('5', String.fromCodePoint(0x1D7CE + 0x05))
                                   .replaceAll('6', String.fromCodePoint(0x1D7CE + 0x06))
                                   .replaceAll('7', String.fromCodePoint(0x1D7CE + 0x07))
                                   .replaceAll('8', String.fromCodePoint(0x1D7CE + 0x08))
                                   .replaceAll('9', String.fromCodePoint(0x1D7CE + 0x09));

        return transformedDigits;
    }
    
    const handleSubmit = function() {

        // Clear existing error messages
        setErrorMessages([]);

        if (isBold && !isItalic && !isSerif) {
            setOutput(outputBold());
        }
        else if (!isBold && isItalic && !isSerif) {
            setOutput(outputItalic());
        }
        else if (isBold && isItalic && !isSerif) {
            setOutput(outputBoldAndItalic());
        }
        else if (isBold && !isItalic && isSerif){
            setOutput(outputBoldSerif());
        }
        else if (!isBold && isItalic && isSerif) {
            setOutput(outputItalicSerif());
        }
        else if (isBold && isItalic && isSerif) {
            setOutput(outputBoldAndItalicSerif());
        }
        else {
            setOutput(input);
        }
    }

    const outputPane=(
        <div>
            <h2>Output</h2>
            {output}
        </div>
    )

    const errorMessagesPane = (
        <>
            <p className="warning" style={{paddingTop: "0.9em"}}><strong>The following warnings occurred: </strong></p>
            <ul>
                {errorMessages.map(errorMessage=><li key={errorMessage}>{errorMessage}</li>)}
            </ul>
        </>
    )

    return (
        <>
            <p className="section-title zero-margin">Formatted Text Generator</p>
            <div className='form'>
                <input className='field' placeholder="Enter text to format" onChange={(e)=>setInput(e.target.value)}/>
                <br/>

                <p>
                    <label className="switch">
                        <input id="boldSwitch" type='checkbox' onChange={(e)=>setIsBold(e.target.checked)} />
                        <span className='slider round'/>
                    </label>
                    <label for="boldSwitch" className='switch-label'><strong>Bold</strong></label>
                </p>
                <p>
                    <label className="switch">
                        <input id="italicSwitch" type='checkbox' onChange={(e)=>setIsItalic(e.target.checked)} />
                        <span className='slider round' />
                    </label>
                    <label for="italicSwitch" className='switch-label'><em>Italic</em></label>
                </p>
                <p>
                    <label className="switch">
                        <input id="serifSwitch" type='checkbox' onChange={(e)=>setIsSerif(e.target.checked)} />
                        <span className='slider round' />
                    </label>
                    <label for="serifSwitch" className='switch-label' style={{fontFamily: 'serif'}}>Use Serifs</label>
                </p>

                <button
                    className="g-recaptcha field submit-button"
                    onClick={handleSubmit}
                    disabled={!isBold && !isItalic || !input}>
                    Format Text
                </button>

                {output && outputPane}
                {errorMessages.length > 0 && errorMessagesPane}
            </div>
        </>
    );
}

export default FormattedTextGenerator