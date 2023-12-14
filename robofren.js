const { Client, Events, GatewayIntentBits } = require('discord.js');const { token } = require('./config.json');
const hive = require('@hiveio/hive-js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => { 
  console.log('RoboFren lives again!');
});

client.login(token);