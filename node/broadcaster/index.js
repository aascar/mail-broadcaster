/**
 * Created by jyothi on 9/2/17.
 */
import Mailer from './mailer';


class MailBroadcaster {

    constructor(conf, options){
        this.mailer = Mailer(conf); //creating mailer instance. Singleton
    }




}