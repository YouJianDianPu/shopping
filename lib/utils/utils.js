const crypto = require('crypto');

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	host: 'smtp.126.com',
	port: 25,
	auth: {
		user: 'hwf969722998@126.com', //发件人
		pass: 'hwf969722998' //授权码
	}
});

// let mailOptions = {
	
// }

class Utils{
	constructor(){}

	addCrypto(o, field){
		let md5 = crypto.createHash('md5');
		md5.update(o[field]);
		o[field] = md5.digest('hex');
	}

	sendMail(mailOptions, fn){
		transporter.sendMail(mailOptions, fn);
	}
}

module.exports = new Utils();