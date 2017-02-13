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

    /**
     * @param second
     * @param minute
     * @param hour
     * @param date
     * @param month
     * @param year
     * @param dayOfWeek
     */
    configureRule = (second = 1, minute = null, hour = null, date = null, month = null, year = null, dayOfWeek = null) => {
        let rule = new scheduler.RecurrenceRule();
        //rule.dayOfWeek = [0, new scheduler.Range(4, 6)]; //range
        rule.second = second;
        rule.minute = minute;
        rule.hour = hour;
        rule.date = date;
        rule.month = month;
        rule.year = year;
        rule.dayOfWeek = dayOfWeek;
    };

    runCronJob = (rule) => {
        let job = scheduler.scheduleJob(rule, function(){
            console.log('Today is recognized by Rebecca Black!');
        });
    }



}