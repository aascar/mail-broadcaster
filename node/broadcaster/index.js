/**
 * Created by jyothi on 9/2/17.
 */
import Mailer from './mailer';

//TODO: need more configurations for cron jobs and DataSources support

class MailBroadcaster {

    constructor(conf, options){
        this.mailer = Mailer(conf); //creating mailer instance. Singleton
    }

    sendMail = (mail) => {

        this.mailer.sendMail(mail); //TODO: need more configuration here
    };

    scheduleMail = () => {
        //TODO:
    };



}