import path from 'path'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

import { host, port, user, pass} from '../config/mail.json'
var transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass
  }
});

transport.use('compile', hbs({
  viewEngine:{
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/resources/mail/'),
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}))
export default transport
