import characters from "../models/Character";

class CharacterController {

    static findAll = (req, res) => {
        characters.find((err, characters) =>{
            res.json(characters);
        })
    }

    static saveCharacter = (req, res) => {
        let character = new characters(req.body);
        character.save((err) => { 
            if(err) {
                res.status(500).send({ message: `${err.message} - fail to save character` })
            }else{
                res.status(201).send(character.toJSON());
            }
         })
    }

    static updateCharacter = (req, res) => {
        const id = req.params.id;

        characters.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).message({ message: "Book updated!" })
            }else{
                res.status(500).send({ message: `Error to Update: ${err.message}` })
            }
        });
    }

}

export default CharacterController;