import bcrypt from 'bcrypt'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'
const express = require('express')
const { Table } = require('../managers/modelsMansger')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const { password } = req.body
    try {
        bcrypt.hash(password, 10, async (err, hash) => {

            req.body.password = hash
            Table('user').create(req.body).then((user) => {
                console.log(req.body)
                console.log(user)
                res.json({
                    status: true,
                    result: user,
                    msg: ''
                })
            }).catch((error) => {
                console.log(error)
            })
        })

        // email 중복체크 : Front 에서 체크하나, Back에서 다시한번 체크
        // const check = await user_model.findOne({ where: { email } })
        // if (check) return res.json({ result: null, msg: '아이디 중복' })

        // User 등록하기.
        // const user = await user_model.create({ email, nickname, password })
        // const user = await Table('user').create({ email, nickname, password })

    } catch (e) {
        res.status(500).json({
            status: false,
            result: null,
            msg: '예상치 못한 오류가 발생되었습니다.',
        })
    }
})

router.post('/signin', async (req, res) => {
    try {
        // console.log(req.body)
        const _user = await Table('user').findOne({
            where: {
                email: {
                    [Op.eq]: req.body.email // op = option 약자 eq = 같다
                }
            }
        })
        if (_user) {
            if (bcrypt.compareSync(req.body.password, _user.dataValues.password)) {
                // 패스워드 일치
                delete _user.dataValues.password
                let token = jwt.sign({
                    ..._user.dataValues,
                    exp: Math.floor(Date.now() / 1000) + 60,
                    iat: Math.floor(Date.now() / 1000) // iat = 만들어진시간
                },
                    process.env.SECRET_KEY
                )
                _user.dataValues.token = token
                res.json({ status: true, userData: _user.dataValues, token: token })
            } else {
                // 패스워드 불일
                res.json({ status: false, msg: "패스워드를 확인해주세요" })
            }
        } else {
            // 해당유저업승
            res.json({ status: false, msg: "이메일를 확인해주세요" })
            // navigate('/')
        }
    } catch (error) {
        console.log(error)
        res.json({ status: false, msg: "관리자에게 문의하세요" })
    }
})


module.exports = router;