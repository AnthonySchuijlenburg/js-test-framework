import {falsy, it, truthy} from "testframework";
import {isInt} from "../src/index.js";

export function isIntTest() {
    it("should return true when fed with an int", () => {
        // Arrange
        const value = 1;

        // Act
        const isIntResult = isInt(value);

        // Assert
        truthy(isIntResult);
    });

    it("should return true when fed with an string that contains an int", () => {
        // Arrange
        const value = "1";

        // Act
        const isIntResult = isInt(value);

        // Assert
        truthy(isIntResult);
    });

    it("should return false when fed with an string that doesn't contain an int", () => {
        // Arrange
        const value = "string";

        // Act
        const isIntResult = isInt(value);

        // Assert
        falsy(isIntResult);
    });
}
