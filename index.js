const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'RavenMc.live', 
  port: 25565,
  username: 'BestOfEverything', 
  version: '1.21.4' 
})

bot.on('spawn', () => {
  console.log('البوت دخل السيرفر بنجاح!')
  // سجل دخولك تلقائياً (غير 123456 لباسووردك)
  bot.chat('/register 123456 123456')
  bot.chat('/login 123456')
})

// حركة بسيطة كل 30 ثانية عشان ما يطردك السيرفر (Anti-AFK)
setInterval(() => {
  if (bot.entity) {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }
}, 30000)

bot.on('kicked', (reason) => console.log('تم الطرد: ' + reason))
bot.on('error', (err) => console.log('خطأ: ' + err))
