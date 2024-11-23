const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349010323683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVSk5BTFY0ZU5HcWJTUkF2MkEwMU8yNDNmQmhPR3dzSGVXamFyM0JNbnNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTAzMjM2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRFQjNFNURBMzkzQTlBMDYxMUVFRkZFMDU4NjU1MTkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM2ODYxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTAzMjM2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI1REQyQzY4NjQ0RjJBRDIxNzEwREREQ0M4QjM5MkYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM2ODYxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTAzMjM2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU5Njk0QUMwMERGMEM5QkREOEFFRUQwQkY2NTFCODNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM2ODYxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTAzMjM2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYzMUMxM0VGRUMxMkM2RUZCOTZDOTNGODAzMzBBRUQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM2ODYxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvWEgybHFnbFNPaTVWUVZMMF9UWTZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZkYTBiZGZhLTM1NDAtNDgzYi1hNzE0LTI1NmExNDBjNWI3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICA5OSxcbiAgICAgIDE5NyxcbiAgICAgIDIwMyxcbiAgICAgIDU4LFxuICAgICAgMTk1LFxuICAgICAgMTI4LFxuICAgICAgMTYyLFxuICAgICAgMTY0LFxuICAgICAgMjI1LFxuICAgICAgOTQsXG4gICAgICAxMSxcbiAgICAgIDI1MCxcbiAgICAgIDIxNSxcbiAgICAgIDM3LFxuICAgICAgNDIsXG4gICAgICAyMDQsXG4gICAgICAyMTEsXG4gICAgICAxNzksXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE5NSxcbiAgICAgIDk0LFxuICAgICAgMjE1LFxuICAgICAgMjE5LFxuICAgICAgMTE2LFxuICAgICAgNTUsXG4gICAgICA3MCxcbiAgICAgIDIwMSxcbiAgICAgIDkyLFxuICAgICAgMjQ2LFxuICAgICAgMTQ3LFxuICAgICAgODEsXG4gICAgICAxODAsXG4gICAgICAyMzcsXG4gICAgICAxODMsXG4gICAgICAyNDMsXG4gICAgICAxNTgsXG4gICAgICAxODEsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaUVpYQkZFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMDMyMzY4MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FkZGxlcHJpbWUgOFwiLFxuICAgIFwibGlkXCI6IFwiMjA1MTU4MzA2ODQ4ODkyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9QZ2FvRUVPS3hoN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvaUxqTDNmNStoZm5WUkI1OW5iRHBnYTh2OFN3bFpJcThiYytsc0QzMGhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRNQTh3VlZ1amNVd2pjdVJKRjBpcDZsYlc0MDVENm5aU00zU3hVWnVyRFB3NGdpWk50V1UyL1NVOHFyT3ZNUVRNTTVZdzRaRjExQWNtNU1kRXJTa0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1WRG5xb0QvekQ2UEJIU1ROVjUySTJrWXFmUkJiWUE2TDlrU1VoVHVvVTZlSEJYK2RLQ3ZId3hTYzRJVVJFakhJMWV4eGtQS2djYWVVb0RPNTAzVGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTAzMjM2ODM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMzY4NjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRC9yXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEL3IuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
