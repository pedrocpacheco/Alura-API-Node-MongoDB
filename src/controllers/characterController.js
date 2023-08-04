import characters from "../models/Character";

class CharacterController {

    static findAll = (req, res) => {
        characters.find((err, characters) =>{
            res.json(characters);
        })
    }

}

export default CharacterController;