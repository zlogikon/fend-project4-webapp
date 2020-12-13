import { scoreUpdate } from "../src/client/js/scoreUpdate"

describe("Testing the score reporting functionality", () => {
    test("Testing the scoreUpdate() function", () => {
        const testScore = 'P'
        expect(scoreUpdate(testScore)).toBe('Positive');
    })
    test("Testing the scoreUpdate() function", () => {
        const testScore = 'N'
        expect(scoreUpdate(testScore)).toBe('Negative');
    })
    test("Testing the scoreUpdate() function", () => {
        const testScore = 'NEU'
        expect(scoreUpdate(testScore)).toBe('Neutral');
    })
});