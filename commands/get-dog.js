const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rw-getdog')
		.setDescription('Gets a random doggo'),
	async execute(interaction) {
		await interaction.deferReply();
		const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
        const embed = new MessageEmbed()
            .setColor("#45c7d7")
            .setTitle("Your random doggo has arrived!")
            .setImage(message)
		interaction.editReply({ embeds: [embed] });
	},
};