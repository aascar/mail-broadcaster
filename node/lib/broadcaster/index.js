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
     * @param mail [Mail]
     */
    sendMail = (mail) => {
        console.log("Came to send", mail);
        this.mailer.sendMail(mail); //TODO: need more configuration here
    };

    /**
     * To schedule mail with interval or later
     * @param mail [Mail]
     * @param options [Object] {schedule: [rule | date]}
     */
    scheduleMail = (mail, options) => {
        this.scheduleJob(options.schedule, () => { //schedules mail
            this.sendMail(mail); //sends mail with options containing time or schedule
        });
    };

    /**
     *
     * @param second
     * @param minute
     * @param hour
     * @param date
     * @param month
     * @param year
     * @param dayOfWeek
     * @returns {*|RecurrenceRule}
     */
    makeRule = (second = 1, minute = null, hour = null, date = null, month = null, year = null, dayOfWeek = null) => {
        let rule = new scheduler.RecurrenceRule();
        //rule.dayOfWeek = [0, new scheduler.Range(4, 6)]; //range
        rule.second = second;
        rule.minute = minute;
        rule.hour = hour;
        rule.date = date;
        rule.month = month;
        rule.year = year;
        rule.dayOfWeek = dayOfWeek;
        return rule;
    };

    /**
     *
     * @param rule [configRule]
     */
    runCronJob = (rule) => {
        let job = scheduler.scheduleJob(rule, function(){
            console.log('Job is scheduled');
        });
    };

    /**
     *
     * @param schedule [rule] | [Date(YYYY, MM, DD, HH, mm, ss)]
     * @param job [function]
     */
    scheduleJob = (schedule, job) => {
        let scheduledJob = scheduler.scheduleJob(schedule, function(y){
            job();
            console.log(y);
        }.bind(this, "Job Scheduled"));
    }


}