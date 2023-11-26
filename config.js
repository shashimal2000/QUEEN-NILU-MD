/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;AiB0lAQB#CEVnbhJ34mODROhYR2feFbOhqvBPlOzxyV-zZ3rK25A' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://shashi_7_user:KK3RcaQar9eItDoA6S6Ey1sqkLa5J6rB@dpg-cl4t1o5qkk8c73c1h9rg-a.frankfurt-postgres.render.com/shashi_7'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94788779949'

global.OWNER_NAME = 'shashi_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'MIHIDHUMSEYA'

global.FOOTER = 'MIHIDHUMSEYA BOT 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@SHASHI 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'MIHIDHUMSEYA © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/ee5309cdd1d93c35e19b5.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'welcome' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://www.mihidumseya.blogspot.com' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: The nature tv" //ur yt chanel name
global.socialm = "GitHub: shashimal2000" //ur github or insta name
global.location = "Srilanka, Ambalantota" //ur location
