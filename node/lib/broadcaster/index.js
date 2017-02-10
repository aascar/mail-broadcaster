/**
 * Created by jyothi on 9/2/17.
 */
import Mailer from './mailer';
import scheduler from 'node-schedule';

//TODO: need more configurations for cron jobs and DataSources support

export default class MailBroadcaster {

    /**
     *
     * @param conf {Object} required configuration for SMTP Mail
     * @param options {Object} if any
     */
    constructor(conf, options = {}){
        console.log("Mailer Instance", conf);
        this.mailer = Mailer(conf); //creating mailer instance. Singleton
    }

    /**
     * To send Mail
     * @param mail
     */
    sendMail = (mail) => {
        console.log("Came to send", mail);
        this.mailer.sendMail(mail); //TODO: need more configuration here
    };

    /**
     * To schedule mail with interval or later
     * @param options
     */
    scheduleMail = (options) => {
        //TODO: Take date or proper schedule to run cron jobs
        //scheduler.scheduleJob()
    };



}