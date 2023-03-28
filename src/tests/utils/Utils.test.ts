import { Utils } from "../../utils/Utils";

test("getDateTimeStringFromDate aformat check", () => {
    let testDate = new Date(2023, 2, 14, 22, 54, 5);
    // We're dividing timezone with 60 because its unit is minutes and we need hours. 
    // And also multiplying it with -1 because it gives us difference from our perspective to UTC not the other way around.
    let timezone: any = -1 * (testDate.getTimezoneOffset() / 60);
    timezone = timezone > 0 ? '+' + timezone : timezone;
    expect(Utils.getDateTimeStringFromDate(testDate)).toBe(`2023/03/14 22:54:05 (UTC${timezone})`);
});