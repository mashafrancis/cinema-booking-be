// import app from '../app';

// const siteUrl = app.get('siteUrl');

const whitelist = [
  'http://localhost:3000',
  'http://cinema-booking.com:3000'
];

const corsOptions = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  origin: function(origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default corsOptions;
