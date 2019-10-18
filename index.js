let request = require('request-promise');

const SMS_API = 'http://sms.sslwireless.com/pushapi/dynamic/server.php';

async function sendSMS(receiver, text, userName, password, bengaliSID, englishSID, csmsid) {
    let params = getParams(receiver, text, userName, password, bengaliSID, englishSID, csmsid);

    return request({
        url: `${ SMS_API }`,
        method: 'GET',
        qs: params,
        json: true
    });

}

function bengaliToUnicode(bengaliText) {
    let length = bengaliText.length;

    let unicode = '';
    for (let i = 0; i < length; i++) {
        unicode += bengaliText.charCodeAt(i).toString(16).padStart(4, '0');
    }

    return unicode;
}

function getParams(receiver, text, userName, password, bengaliSId, englishSId, cSMSId) {
    let params = {
        msisdn: receiver,
        user: userName,
        pass: password,
        sms: text,
        sid: englishSId,
        csmsid: cSMSId
    };

    if (!isEnglishSMS(text)) {
        params.sid = bengaliSId;
        params.sms = bengaliToUnicode(text);
    }

    return params;
}

function isEnglishSMS(text) {
    return Array.from(text).every(char => char.charCodeAt(0) <= 127);
}

module.exports = {
    sendSMS,
    bengaliToUnicode
};
