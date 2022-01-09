const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rw-ping')
		.setDescription('Makes the bot reply'),
	async execute(interaction) {
		await interaction.reply("I'm up! I'm up! Geez...");
	},
};