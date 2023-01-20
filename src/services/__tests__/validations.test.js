const { isEmpty } = require("../validations");
const { validateGamerTag } = require("../validations");
describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("validations tests suites - validateGamerTag", () => {
    test("should return false as gamertag is empty", () => {
        const result = validateGamerTag("");
        expect(result).toBe(false);
    });

    test("should return false as gamertag have 8 chars and 1 digit", () => {
        const result = validateGamerTag("acbdefgh1");
        expect(result).toBe(false);
    });

    test("should return false as gamertag have no digit", () => {
        const result = validateGamerTag("acbdefgh");
        expect(result).toBe(false);
    });

    test("should return true as gamertag have digit and special char", () => {
        const result = validateGamerTag("acbde*fgh1");
        expect(result).toBe(true);
    });
});
