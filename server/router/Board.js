import { Op } from 'sequelize'
const express = require('express')
const { Table } = require('../managers/modelsMansger')
const router = express.Router()


router.get('/write', async (req, res) => {

    try {
        await Table('board').create({
            username: "asdf"
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