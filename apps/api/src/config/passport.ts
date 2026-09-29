import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(new Error('No email found in Google profile'));
        }

        let user = await User.findOne({ email });

        if (!user) {
            const newUser = new User({
                email,
                fullName: profile.displayName,
                image: profile.photos?.[0]?.value,
                provider: 'google',
                emailVerified: new Date(),
            });
            await newUser.save();
            console.log('New user created:', user._id);
        } else {
          console.log('Existing user found - ', user._id)
        };

        return done(null, user);
      } catch (err) {
        console.error('Google strategy error:', err);
        return done(err as Error);
      }
    }
  )
);

export default passport;