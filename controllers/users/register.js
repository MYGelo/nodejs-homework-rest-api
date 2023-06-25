const User = require('../../models/user');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');


const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw res.status(409).json({ message: 'Email in use' });
    }
    const verificationToken = nanoid();
    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, avatarURL, password: hashPassword });

    console.log(`===== verificationToken`, verificationToken);

    // const mail = {
    //   to: userEmail,
    //   Subject: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
    // };

    // const sendEmail = function (error, data, response) {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('API called successfully.');
    //   }
    // };

    // api.emailsPost(emailEE, sendEmail);

    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL,
        verificationToken,
      },
    });
  } catch (error) {
    console.log(`Error in register!!!`, error);
    next(error);
  }
};

module.exports = register;
