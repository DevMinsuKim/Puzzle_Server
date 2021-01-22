const express = require('express')
const { userController } = require('../controller');
const usersRouter = express.Router();
const upload = require('../controller/uploadFunctions/uploadProfile')

usersRouter.post('/login', userController.login)
usersRouter.post('/signup', userController.signup)
usersRouter.post('/logout', userController.logout)
usersRouter.get('/userinfo', userController.userinfo)
usersRouter.get('/google', userController.google)
usersRouter.post('/google', userController.google)
usersRouter.get('/kakao', userController.kakao)
usersRouter.post('/kakao', userController.kakao)
usersRouter.post('/profile', upload.single('image'), userController.profile)

module.exports = usersRouter
