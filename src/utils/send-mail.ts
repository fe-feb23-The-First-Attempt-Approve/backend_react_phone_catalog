import 'dotenv/config';
import { send } from '../services/emailService';

send({
  email: '',
  subject: 'test',
  html: 'hi',
});
