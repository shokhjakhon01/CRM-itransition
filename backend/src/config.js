import 'dotenv/config';

const PORT = process.env.PORT || 4100;

const MOONGO_URI = 'mongodb+srv://muhammadqodir:muhammadqodir@cluster1.dlcb06m.mongodb.net/AdminCRM'

const SECRET =  'apple'

export { PORT, MOONGO_URI,SECRET };
