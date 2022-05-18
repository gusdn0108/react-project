import express from 'express'
import Auth from './Auth'


const route = express.Router()

route.use("/auth", Auth)

module.exports = route