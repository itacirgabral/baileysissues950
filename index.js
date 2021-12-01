const fs = require('fs')
const { WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys')

const someone = '554433221100@s.whatsapp.net'
const image = fs.readFileSync(require('path').join(__dirname, 'gretchen.jpeg'))
const messageType = MessageType.image
const options = {
  mimetype: Mimetype.image,
  filename: 'gretchen.jpeg'
}

;(async () => {
    const conn = new WAConnection()

    await conn.connect()

    setTimeout(() => {
        console.log('bep')
        conn
          .sendMessage (someone, image, messageType, options)
          .then(console.dir)
          .catch(console.erro)
    }, 1_000)
})()