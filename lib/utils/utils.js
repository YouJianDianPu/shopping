const crypto = require('crypto');

class Utils{
	constructor(){}

	addCrypto(o, field){
		let md5 = crypto.createHash('md5');
		md5.update(o[field]);
		o[field] = md5.digest('hex');
	}
}

module.exports = new Utils();