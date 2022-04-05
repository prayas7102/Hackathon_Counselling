const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const { fs } = require('fs');
const path=require('path')
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access Control Allow Origin", "*")
    res.header("Access Control Allow Headers",
        "Origin, X-Requested with, Content-Type, Accept");
    next();
})
app.post('/add_questions/doc:_id', (req, res) => {
    let docs_data = req.body;
    let name = req.params.doc_id;
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data);
});
app.get('/data/doc:_id', (req, res) => {
    let docId=req.params.doc_id;
    fs.readFile(`files/${docId}/.json`,(err,data)=>{
        if(err) throw err;
        let ques_data=JSON.parse(data);
        res.send(ques_data);
    })
})
app.get('/get_all_files', (req, res) => {
    let directorypath=path.join(__dirname,'/files');
    fs.readdir(directorypath, (err,files)=>{
        if(err) throw err;
        res.send(files);
    });
})

app.listen(9000,()=>{console.log('server running at 9000')})