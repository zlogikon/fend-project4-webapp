import { checkURL } from "../src/client/js/URLChecker"

describe("Testing the URLChecker functionality", () => {
    test("Testing the checkURL() function", () => {
        const url = 'https://www.google.com'
        expect(checkURL(url)).toBe(true);
    })
    test("Testing the checkURL() function", () => {
        const url = 'https://www.go ogle.com' // should not include spaces
        expect(checkURL(url)).toBe(false);
    })
    test("Testing the checkURL() function", () => {
        const url = 'www.google.com' //should include http:// or https://
        expect(checkURL(url)).toBe(false);
    })
});




