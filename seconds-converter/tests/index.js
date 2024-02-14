import {end, expect, it, skipIt} from "testframework";
import {formatTimeTest} from "./formatTimeTest.js";
import {isIntTest} from "./isIntTest.js";
import {convertSecondsHumanReadableTest} from "./convertSecondsHumanReadableTest.js";
it("should succeed", () => {
    // Arrange
    let value = Math.random();

    // Act
    value += 1;

    // Assert
    expect(value >= 1);
});

// it("should fail", () => {
//     // Arrange
//     let value = Math.random();

//     // Act
//     value -= 1;

//     // Assert
//     expect(value >= 1);
// });

skipIt("should be disabled", () => {
    // Arrange
    let value = Math.random();

    // Act
    value -= 1;

    // Assert
    expect(value >= 1);
});

formatTimeTest();
isIntTest();
convertSecondsHumanReadableTest();
end();
