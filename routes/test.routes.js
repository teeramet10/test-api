const express = require('express')
const app = express()

const {test} = require('../controller/index')

app.get('/list_chat',test.getListChat)

module.exports = app