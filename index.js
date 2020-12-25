// require the discord.js module
const Discord = require('discord.js');

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
client.login('NzkxOTQ0MzcxMjgwODA1OTI4.X-Whqw.PdgMOkflLRTg0H6j_mh4Wvt_w5g');
