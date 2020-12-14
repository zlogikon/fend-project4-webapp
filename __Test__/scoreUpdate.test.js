import { scoreUpdate } from "../src/client/js/scoreUpdate"

describe("Testing the score reporting functionality", () => {
    test("Testing the scoreUpdate() function", () => {
        const testScore = 'P'
        expect(scoreUpdate(testScore)).toBe('POSITIVE');
    })
    test("Testing the scoreUpdate() function", () => {
        const testScore = 'N'
        expect(scoreUpdate(testScore)).toBe('NEGATIVE');
    })
    test("Testing the scoreUpdate() function", () => {
        const testScore = 'NEU'
        expect(scoreUpdate(testScore)).toBe('NEUTRAL');
    })
});