const ElasticEmail = require('@elasticemail/elasticemail-client');
require('dotenv').config();

const { ELASTICEMAIL_API_KEY } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTICEMAIL_API_KEY;

const api = new ElasticEmail.EmailsApi();

const userEmail = 'oleg.miholap95@gmail.com';

const emailEE = ElasticEmail.EmailMessageData.constructFromObject({
  Recipients: [new ElasticEmail.EmailRecipient(userEmail)],
  Content: {
    Body: [
      ElasticEmail.BodyPart.constructFromObject({
        ContentType: 'HTML',
        Content: '<h1>11111</h1><p>Verify email!!!!gggg</p>',
      }),
    ],
    Subject: 'Verify email',
    From: 'rozor_9@ukr.net',
  },
});

const sendEmail = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};

api.emailsPost(emailEE, sendEmail);

// module.exports = sendEmail;
