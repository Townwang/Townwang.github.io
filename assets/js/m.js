---
layout: compress
---
const app = require（'express'）（）
const request = require（'request'）
const bodyParser = require（'body-parser'）
const upload = require（'multer'）（）

app.use（（req，res，next）=> {
  res.header（'Access-Control-Allow-Origin'，'*'）
  res.header（'Access-Control-Allow-Headers'，'Origin，X-Requested-With，Content-Type，Accept，Authorization'）
  res.header（'Content-Type'，'application / json'）
  下一个（）
}）

app.use（bodyParser.json（））
app.use（bodyParser.urlencoded（{extended：true}））

app.post（'*'，upload.array（），（req，res）=> {
  request.post（{
    url：'https://github.com/login/oauth/access_token'，
    形式：req.body，
    标题：{
      'Accept'：'application / json'，
      'User-Agent'：'gh-oauth-server'，
    }，
  }，（error，r，body）=> {
    if（！error）{
      res.send（体）
    } else {
      res.json（{error}）
    }
  }）
}）

const port = process.env.PORT || 3000
app.listen（port，（）=> console.log（`gh-oauth-server listen on port $ {port}`））