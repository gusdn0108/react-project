import express from 'express'
import Auth from './Auth'
import Board from './Board'

const route = express.Router()

route.use("/auth", Auth) // 주소
route.use("/board", Board)


module.exports = route