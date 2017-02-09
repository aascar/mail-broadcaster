/**
 * Created by jyothi on 9/2/17.
 */

/**
 * Model for Mail
 */
export default class Mail {
    /**
     *
     * @param from - required
     * @param to - required
     * @param subject - [optional]
     * @param text - [optional]
     * @param html - [optional]
     */
    constructor(from, to, subject, text, html){
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.html = html;
    }
};