let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial BOT :
Credit: *~[ Abhinav ]*
 
Sorry Currently Tutorial not Available
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

