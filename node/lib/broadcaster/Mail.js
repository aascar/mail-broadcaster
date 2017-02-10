/**
 * Created by jyothi on 9/2/17.
 */

/**
 * Model for Mail
 */
export default class Mail {
    /**
     *
     * @param from - (String) [required]
     * @param to - Array[String]| (String) [required]
     * @param subject - (String) [optional]
     * @param text - (String) [optional]
     * @param html - (XML|HTML) [optional]
     */
    constructor(from, to, subject, text, html){
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.html = html;
        let toAddress = Array.isArray(to) ? to.reduce((a, b) => `${a}, ${b}`) : to;
        this.to = Array.isArray(toAddress);
    }
};