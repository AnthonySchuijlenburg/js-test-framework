import {identical, it} from "testframework";
import {formatTime} from "../src/index.js";

export function formatTimeTest() {
    it("should format single spelling for singles", () => {
        // Arrange
        const value = "1 jaar, 1 maand, 1 dag, 1 uur, 1 minuut, 1 seconde";

        // Act
        const result = formatTime({
            seconds: 1,
            minutes: 1,
            hours: 1,
            days: 1,
            months: 1,
            years: 1,
        });

        // Assert
        identical(value, result);
    });

    it("should format plural spelling for plurals", () => {
        // Arrange
        const value = "2 jaren, 2 maanden, 2 dagen, 2 uren, 2 minuten, 2 seconden";

        // Act
        const result = formatTime({
            seconds: 2,
            minutes: 2,
            hours: 2,
            days: 2,
            months: 2,
            years: 2,
        });

        // Assert
        identical(value, result);
    });
}
