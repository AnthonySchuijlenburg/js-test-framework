import {expect, it} from "testframework";
import {convertSecondsHumanReadable} from "../src/index.js";

export function convertSecondsHumanReadableTest() {
    it("should keep only seconds if less than 60", () => {
        // Arrange
        const value = {
            seconds: 1,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        };

        // Act
        const result = convertSecondsHumanReadable({
            seconds: 1,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        });

        // Assert
        expect(isEqualTimeObject(value, result));
    });

    it("should overflow seconds to minutes", () => {
        // Arrange
        const value = {
            seconds: 30,
            minutes: 1,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        };

        // Act
        const result = convertSecondsHumanReadable({
            seconds: 90,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        });

        // Assert
        expect(isEqualTimeObject(value, result));
    });

    it("should overflow minutes to hours", () => {
        // Arrange
        const value = {
            seconds: 30,
            minutes: 1,
            hours: 1,
            days: 0,
            months: 0,
            years: 0,
        };

        // Act
        const result = convertSecondsHumanReadable({
            seconds: 3690,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        });

        // Assert
        expect(isEqualTimeObject(value, result));
    });

    it("should overflow hours to days", () => {
        // Arrange
        const value = {
            seconds: 30,
            minutes: 1,
            hours: 1,
            days: 1,
            months: 0,
            years: 0,
        };

        // Act
        const result = convertSecondsHumanReadable({
            seconds: 90090,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        });

        // Assert
        expect(isEqualTimeObject(value, result));
    });

    it("should overflow days to months", () => {
        // Arrange
        const value = {
            seconds: 30,
            minutes: 1,
            hours: 1,
            days: 1,
            months: 1,
            years: 0,
        };

        // Act
        const result = convertSecondsHumanReadable({
            seconds: 2768490,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        });

        // Assert
        expect(isEqualTimeObject(value, result));
    });

    it("should overflow months to years", () => {
        // Arrange
        const value = {
            seconds: 30,
            minutes: 1,
            hours: 1,
            days: 1,
            months: 1,
            years: 1,
        };

        // Act
        const result = convertSecondsHumanReadable({
            seconds: 34304490,
            minutes: 0,
            hours: 0,
            days: 0,
            months: 0,
            years: 0,
        });

        // Assert
        expect(isEqualTimeObject(value, result));
    });
}

function isEqualTimeObject(object1, object2) {
    return object1.seconds === object2.seconds &&
        object1.minutes === object2.minutes &&
        object1.hours === object2.hours &&
        object1.days === object2.days &&
        object1.months === object2.months &&
        object1.years === object2.years;
}
