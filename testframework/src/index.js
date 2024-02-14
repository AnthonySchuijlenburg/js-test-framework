const summary = { success: 0, fail: 0, disabled: 0};
let indentLevel = 0;

// Repeats a string n times
const repeat = (str, n) => Array(n).join(str);

// Repeats an indent (of four spaces) n times
const indent = n => repeat('    ', n);

// Indents a string with multiple lines
const indentLines = (str, n) => indent(n) + str.replace(/\n/g, `\n${indent(n)}`);

// Declares a test unit
const it = (title, callBack) => {
    try{
        callBack();
        console.log(` OK        ${title}`);
        summary.success++;
    } catch(e) {
        console.log(` FAIL      ${title}`);
        console.log(indentLines(e.stack, indentLevel + 2));
        summary.fail++;
    }
};

// Disables a test unit
const skipIt = (title) => {
    console.log(` DISABLED  ${title}`);
    summary.disabled++;
};

const end = () => {
    console.log(`\n${repeat('.', 60)}\n`);
    console.log('Test summary:\n');
    console.log(`  Success: ${summary.success}`);
    console.log(`  Failed: ${summary.fail}`);
    console.log(`  Disabled: ${summary.disabled}`);

    if (summary.fail > 0) process.exit(1);
    process.exit(0);
};

// The assertion functions
const expect = (statement) => {
    if (statement) return true;
    throw new Error('Assertion failed.');
};

const falsy = (value) => {
    if (!value) return true;

    throw new Error(`The value is truthy.\nValue: ${value}`);
};

const truthy = (value) => {
    if (value) return true;

    throw new Error(`The value is falsy.\nValue: ${value}`);
};

const identical = (expected, actual) => {
    if (expected === actual) return true;

    throw new Error(`The values are not the same.\n\nFound: ${actual}\nWanted: ${expected}`);
};

module.exports = { expect, it, skipIt, falsy, truthy, identical, end};
