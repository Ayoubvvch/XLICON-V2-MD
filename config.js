import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['212708805657', '𝞓𝘾 𝞛𝞗𝘿𝙎', true],
  ['212614389153', 'ꜱᴛᴜᴅɪᴏ_ᴀᴄ', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['212614389153','32460248586'] 
global.prems = ['212614389153', '32460248586', '919398758484']
global.allowed = ['212614389153', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝞓𝘾𝞛𝞗𝘿𝙎-𝞑𝞗𝙏-𝞛𝘿'
global.premium = 'false'
global.packname = '𝙰𝚌 𝙼𝚘𝚍𝚜┃ᴮᴼᵀ' 
global.author = '@𝙰𝚌 𝙼𝚘𝚍𝚜' 
global.menuvid = 'https://telegra.ph/file/fda577982bbc2536db70c.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/Ayoub_vv_ch\n'  
global.dygp = 'https://chat.whatsapp.com/BfH0KLkICn2BjmGFMRcGMW'
global.fgsc = 'https://github.com/Guru322/GURU-BOT' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')


global.wait = '*🕣 _𝞓𝘾 𝞛𝞗𝘿𝙎 IS LODIND..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
