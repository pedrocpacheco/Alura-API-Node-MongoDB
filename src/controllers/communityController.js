import communityModel from "../models/Community.js";

class CommunityController {

	static findAll = (req, res) =>{
		communityModel.find((err, communityModel) =>{
			res.send(communityModel);
		});
	};

	static findById = (req, res) => {
		communityModel.findById((err, communityModel) => {
			if(!err){ res.send(communityModel); }
			else{ res.status(404).send({ error: "Community not founded" }); }
		});
	};

	static save = (req, res) => {
		let community = new communityModel(req.body);
		community.save((err, communityModel) => {
			if(!err) { res.send(communityModel); }
			else { res.status(500).send({ error: `Error saving the community: ${err.message}` }); }
		});
	};

	static update = (req, res) => {
		let id = req.params.id;
		communityModel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
			if(!err){
				res.send({ message: "Community updated!" });
			}else{
				res.status(500).send({ error: `Error to Update: ${err.message}` });
			}
		});
	};

	// eslint-disable-next-line no-unused-vars
	static delete = (req, res) => { 
		let id = req.params.id;
		communityModel.findByIdAndRemove(id, (err) => {
			if(!err){
				req.send({ message: "Community removed!" });
			} else{
				req.send({ error: `Error to Delete: ${err.message}` });
			}
		});
	};

}

export default CommunityController;