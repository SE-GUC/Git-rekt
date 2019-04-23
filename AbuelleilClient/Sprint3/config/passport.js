const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const Admin = require('../models/Admin')
const tokenKey = require('./keys_prod').verySecretKey

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = tokenKey

module.exports = passport => {
    passport.use('jwt',new JwtStrategy(opts, async (jwtPayload, done) => {
       const currentUser = await Admin.findById(jwtPayload.id)
       if(currentUser) return done(null,currentUser)
       return done(null,false)
    }))
}