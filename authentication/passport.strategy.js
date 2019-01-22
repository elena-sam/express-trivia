const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const service = require('./authentication.service');
const JWTstrategy = require('passport-jwt').Strategy;
// Nous utilisons cela pour extraire le token envoyé par l'utilisateur.
const ExtractJWT = require('passport-jwt').ExtractJwt;

// Creation d'un middleware pour enregistrement utilisateur.
passport.use('signup', new localStrategy({
    usernameField : 'name',
    passwordField : 'password'
  }, async (name, password, done) => {
      try {
        // Sauvegarde les informations utilisateurs en base de donnée.
        const user = await service.insertUser(name, password);
        // Envoie les informations au prochain middleware.
        return done(null, user);
      } catch (error) {
        done(error);
      }
  }));

// Crée un middleware passport pour l'authentification de l'utilisateur.
passport.use('login', new localStrategy({
    usernameField : 'email',
    passwordField : 'password'
  }, async (email, password, done) => {
    try {
      // Recherche l'utilisateur associé au valeur rentrée.
      const user = await service.getUser(email, password);
      if( !user ){
        // Si l'utilisateur n'est pas trouvé en base, ce message est retourné.
        return done(null, false, { message : 'User not found'});
      }
      // Validation du password pour être sur qu'il correspond bien au mot de passe rentré.
      // Si le password est trouvé, retourne true.
      const validate = await user.isValidPassword(password);
      if( !validate ){
        return done(null, false, { message : 'Wrong Password'});
      }
      // Envoie les information au prochain middleware.
      return done(null, user, { message : 'Logged in Successfully'});
    } catch (error) {
      return done(error);
    }
  }));

// Verifie que les informations envoyés par l'utilisateur sont correctes.
passport.use(new JWTstrategy({
    secretOrKey : 'top_secret',
    // Nous nous attendons a ce que l'utilisateur envoie les informations dans la requete.
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
  }, async (token, done) => {
    try {
      // Passe les details utilisteurs au prochain middleware.
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }));