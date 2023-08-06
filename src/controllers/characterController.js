import characterModel from "../models/Character.js";

class CharacterController {

    static findAll = (req, res) => {
        characterModel.find.populate("community").exec((err, characterModel) =>{
            res.send(characterModel);
        })
    }

    static findById = (req, res) => {
        let id = req.params.id;
        characterModel.findById.populate("community").exec(id, (err, characterModel) => {
            if(!error){
                res.send(characterModel);
            }else{
                res.status(404).send({ error: `Error to find Character: ${err.message}` })
            }
        });
    }

    static findByCommunity = (req, res) => { 
        const community = req.query.community;

        livros.find({"community.name": community}, {}, (err, characterModel) => {
            if(!err) { res.send(characterModel) } 
            else{ res.status(404).send({ error: "Community not founded" }) }
        })
    }

    static save = (req, res) => {
        let character = new characterModel(req.body);
        character.save((err) => { 
            if(err) {
                res.status(500).send({ error: `Fail to save character: ${err.message}` })
            }else{
                res.status(201).send(character.toJSON());
            }
         })
    }

    static update = (req, res) => {
        let id = req.params.id;
        characterModel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.send({ message: "Character updated!" })
            }else{
                res.status(500).send({ error: `Error to Update: ${err.message}` })
            }
        });
    }

    static delete = (req, res) => { 
        let id = req.params.id;
        characterModel.findByIdAndRemove(id, (err) => {
            if(!err){
                req.send({ message: "Character removed!" });
            } else{
                req.send({ error: `Error to Delete: ${err.message}` })
            }
        })
    }

}

export default CharacterController;