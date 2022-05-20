import { Op } from 'sequelize'
const express = require('express')
const { Table } = require('../managers/modelsMansger')
const router = express.Router()


router.post('/board', async (req, res) => {
    const { data } = req.body
    try {
        Table('board').create(req.body).then((data) => {
            console.log(req.body)
            res.json({
                status: true,
                result: data,
                msg: ''
            })
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            result: null,
            msg: '예상치 못한 오류가 발생되었습니다.',
        })
    }
})

module.exports = router;