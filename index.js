// require the discord.js module
const Discord = require('discord.js');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN || ""

if ( DISCORD_TOKEN == "" ) {
    console.log("You are a dumbass and forgot to set your discord token as an environment variable... exiting.");
    process.exit(1);
} else {
    console.log(DISCORD_TOKEN);
}

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});


//this allows for messages to show up in console
client.on('message', message => {
	if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    
});

// login to Discord with your app's token
client.login(DISCORD_TOKEN);
