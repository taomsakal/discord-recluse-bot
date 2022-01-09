const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rw-getcat')
		.setDescription('Gets a random cat'),
	async execute(interaction) {
		await interaction.deferReply();
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		const embed = new MessageEmbed()
            .setColor("#EC21A2")
            .setTitle("Your random cat has arrived!")
            .setImage(file)
		interaction.editReply({ embeds: [embed] });
	},
};