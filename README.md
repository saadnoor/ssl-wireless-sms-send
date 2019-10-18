# Send SMS by SSL Wireless
## Background
SSL wireless is a third party service for sending SMS for Bangladeshi numbers. But their documentation isn’t adequate for nodeJS. Also it requires some extra work to send Bangla SMS. This npm package will remove those hassles. 

## Installation
You can use npm to install the package with the following code
```
npm install —save ssl-wireless-sms-send
```

## Usage
There are 2 functionalities to use.
1. **Sending SMS**
It sends sms by using SSL wireless. You need to have the necessary credentials for SSL wireless . For sending SMS you have to call a function named `send`. The `send` method takes these following arguments. (_Make sure order is maintained properly_)

```
send(receiver, text, userName, password, bengaliSid, englishSid, cSMSId)
```
| Argument   | Description                                                                                 |
|------------|---------------------------------------------------------------------------------------------|
| receiver   | The number you want to send SMS                                                             |
| text       | The body of the SMS                                                                         |
| userName   | username provided by SSL wireless                                                           |
| password   | provided by SSL wireless                                                                    |
| bengaliSid | needed in case you want to send Bengali SMS                                                 |
| englishSid | needed for sending only English SMS                                                         |
| cSMSId     | this is a unique id for each sms provided by you. It’s needed for uniquely identify the SMS |


<u>Example SMS send </u> :

```js
const sms = require('ssl-wireless-sms-send');

sms.send('01671996355',
   'This is test SMS',
   'UserName',
   'Password',
   'BanglaSID',
   'EnglishSID',
   '12345678')
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });

```


2. **Convert Bangla to Unicode**
It receives a Bengali string as a argument and converts it to unicode.

```js
let unicode = bengaliToUnicode(banglaText)
```
- - - -
This is created by [saadnoor salehin](https://saadnoor.com), any feedback and PR is welcome.
