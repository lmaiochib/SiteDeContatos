const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Contatos = require("./Contatos");
const cors = require("cors");

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res){
    Contatos.findAll()
    .then(data => {
        res.status(200).send(data);
    }).catch(function(erro){
        res.send("Falha ao listar" + erro);
    });
});

app.get("/:id", function(req, res){
    Contatos.findOne({
        where:{'id':req.params.id}
    }).then(data => {
        res.status(200).send(data);
    }).catch(function(erro){
        res.status(500).send("Falha ao listar" + erro)
    });
});

app.get("/deletar/:id", function(req, res){
    Contatos.destroy({
        where:{'id':req.params.id}
    }).then(function(){
        res.status(200).json({"OK": "OK"});
    }).catch(function(erro){
        res.send("Falha ao excluir post " + erro);
    });
});

app.post("/atualizar", function(req, res){
    Contatos.findOne({
        where:{'id':req.body.id}            
    }).then((contato) => {

        debugger;

        if (contato) {

            const updatedAt = new Date();

            contato.update({
                id: req.body.id,
                nome: req.body.nome,
                email: req.body.email,
                updatedAt: updatedAt
            }).then((resp) => {
                res.status(201).json({"id": resp.id});
            });   
        }
    }).catch(function(erro){
        res.status(500).json({status: "ERROR", erro });
    });    
});

app.post("/add", function(req, res){
    Contatos.create({
        nome:req.body.nome,
        email:req.body.email
    }).then((resp) => {
        res.status(201).json({"id": resp.id});
    }).catch(function(erro){
        res.status(500).json({status: "ERROR", erro });
    });
});

app.listen(8083, function(){
    console.log("ok")
});