export class Utils {

    private static _getDateString(date: Date): String {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    private static _getTimeString(date: Date): String {
        let hours = String(date.getHours()).padStart(2, '0');;
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let seconds = String(date.getSeconds()).padStart(2, '0');
        // We're dividing timezone with 60 because its unit is minutes and we need hours. 
        // And also multiplying it with -1 because it gives us difference from our perspective to UTC not the other way around.
        let timezone: any = -1 * (date.getTimezoneOffset() / 60);
        timezone = timezone > 0 ? '+' + timezone : timezone;

        return `${hours}:${minutes}:${seconds} (UTC${timezone})`;
    }

    static getDateTimeStringFromDate(date: Date): String {
        return `${this._getDateString(date)} ${this._getTimeString(date)}`;
    }

}