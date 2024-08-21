/* SC cháɑca OfficiaL V8
BASE : HW MODS
RECODE : cháɑca OfficiaL
CREACOT : cháɑca OfficiaL
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "6285283090385"
global.namabot = "cháɑca OfficiaL"
global.botname = "cháɑca OfficiaL"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'cacaa' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By cháɑca OfficiaL"

global.namastore = "cháɑca OfficiaL"
global.nodana = "085283090385"
global.nogopay = "085283090385"
global.shopepay = "limit"
global.qris = "https://telegra.ph/file/f2c8c14bf9fad440ad52c.jpg"

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "sukses✅",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang 𝚆𝚈𝙸 𝙾𝙵𝙵𝙲",
       private: "Di Chat Pribadi Bang Raihan Art Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan cháɑca OfficiaL",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan cháɑca OfficiaL",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})