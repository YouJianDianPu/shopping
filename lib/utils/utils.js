const crypto = require('crypto');

const nodemailer = require('nodemailer');

const SMSClient = require('@alicloud/sms-sdk');

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


const accessKeyId = 'LTAIzAnhGSLUBXrt';
const secretAccessKey = 'LOllW7ZvrQ9U6o60rGXWEqAo6E6M4G';

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey});

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

	sendSMS(smsOptions, successFn, errorFn){
		smsClient.sendSMS(smsOptions)
			.then(successFn, errorFn);
	}
}

module.exports = new Utils();