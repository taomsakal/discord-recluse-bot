const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rw-addrole')
		.setDescription('Adds specified role to user')
		.addRoleOption(option => option.setName('role').setDescription('The role to add')),
	async execute(interaction) {
		const role = interaction.options.getRole('role');
		if (interaction.member.roles.cache.has(role.id)) {
			return interaction.reply({ content: `You already belong to the ${ role } role -_-.`, ephemeral: true});
		}
        //I just hard coded in some role IDs; don't be like me kids - that's gay uwu
        if (role.id == 894128360995848202 || role.id == 894903942729850941) {
            if (!interaction.member.roles.cache.some(role => role.id == 894903942729850941) && !interaction.member.roles.cache.some(role => role.id == 894128360995848202)) {
                return interaction.reply({ content: `You don't have permissions to add the ${ role } role. Please contact the server admin if you think there is a mistake.`, ephemeral: true});
            }
        }
		interaction.member.roles.add(role);
        return interaction.reply({ content: `${ interaction.user } has been added to the ${ role } role.`});
	},
};