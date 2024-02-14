import * as readline from "readline";
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const readlineInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function convertSecondsHumanReadable(timeObject){
    let seconds = timeObject.seconds;

    let minutes = seconds / 60;
    seconds = Math.floor(seconds % 60);

    let hours = minutes / 60;
    minutes = Math.floor(minutes % 60);

    let days = hours / 24;
    hours = Math.floor(hours % 24);

    let months = (days * 12) / 365;
    days = Math.floor(days % (365 / 12));

    let years = Math.floor(months / 12);
    months = Math.floor(months % 12);

    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
        months: months,
        years: years,
    }
}

export function formatTime(timeObject) {
    let printString = '';

    printString += timeObject.years + (timeObject.years === 1 ? " jaar, " : " jaren, ");
    printString += timeObject.months + (timeObject.months === 1 ? " maand, " : " maanden, ");
    printString += timeObject.days + (timeObject.days === 1 ? " dag, " : " dagen, ");
    printString += timeObject.hours + (timeObject.hours === 1 ? " uur, " : " uren, ");
    printString += timeObject.minutes + (timeObject.minutes === 1 ? " minuut, " : " minuten, ");
    printString += timeObject.seconds + (timeObject.seconds === 1 ? " seconde" : " seconden");

    return printString;
}

export function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function main() {
    readlineInstance.question('Enter an amount of seconds: ', seconds => {

        if (!isInt(seconds)) {
            console.log("This is not a valid number")
            return;
        }

        console.log(`"You entered: ${seconds} seconds, which is:"`);

        let timeObject = {
            seconds: seconds,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        }

        timeObject = convertSecondsHumanReadable(timeObject);
        console.log(formatTime(timeObject));
    });
}

let entryFile = process.argv?.[1];

if (entryFile === __filename) {
    main();
}


