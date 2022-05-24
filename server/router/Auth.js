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




// 로그인 
router.post('/signin',async (req,res)=>{
    try {
        const _user = await Table('user').findOne({
            where:{
                email:{
                    [Op.eq]: req.body.email
                }
            }
        })

        if(_user){
            if(bcrypt.compareSync(req.body.password, _user.dataValues.password)){
                delete _user.dataValues.password
                let token = jwt.sign({
                    ..._user.dataValues,
                    exp: Math.floor(Date.now() / 1000 ) + 600000,
                    iat:Math.floor(Date.now() / 1000)
                },
                process.env.SECRET_KEY
                )
                _user.dataValues.token = token
                
                res.json({
                    status: true,
                    userData: _user.dataValues,
                    token:token
                })
            } else {
                res.json({
                    status: false,
                    msg:'너 비밀번호틀렸어 '
                })
            }
        } else {
            res.json({
                status: false,
                msg:'너 이메일이 틀렸엉 '
            })
        }
    } catch (error) {
        res.json({
            status: false,
            msg:'관리자한태 문의해봐 ㅎㅎ '
        })
    }
    }
)




module.exports = router;