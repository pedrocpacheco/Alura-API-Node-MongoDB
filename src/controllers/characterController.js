import characterModel from "../models/Character";

class CharacterController {

    static findAll = (req, res) => {
        characterModel.find((err, characterModel) =>{
            res.send(characterModel);
        })
    }

    static findById = (req, res) => {
        let id = req.params.id;
        characterModel.findById(id, (err, characterModel) => {
            if(!error){
                res.send(characterModel);
            }else{
                res.status(404).send({ error: `Error to find Character: ${err.message}` })
            }
        });
    }

    static saveCharacter = (req, res) => {
        let character = new characterModel(req.body);
        character.save((err) => { 
            if(err) {
                res.status(500).send({ error: `Fail to save character: ${err.message}` })
            }else{
                res.status(201).send(character.toJSON());
            }
         })
    }

    static updateCharacter = (req, res) => {
        const id = req.params.id;

        characterModel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).message({ message: "Book updated!" })
            }else{
                res.status(500).send({ error: `Error to Update: ${err.message}` })
            }
        });
    }

}

export default CharacterController;