const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rw-rmrole')
		.setDescription('Removes specified role from user')
		.addRoleOption(option => option.setName('role').setDescription('The role to remove')),
	async execute(interaction) {
		const role = interaction.options.getRole('role');
		if (!interaction.member.roles.cache.has(role.id)) {
			return interaction.reply({ content: `You do not belong to the ${ role } or it does not exist.`, ephemeral: true});
		}
		interaction.member.roles.remove(role);
        return interaction.reply({ content: `${interaction.user} has been removed from the ${ role } role.`});
	},
};