const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

//Note: this does not check for nsfw content; I trust my server members to be wise with such things
//Use data.children[i].data.over_18 to check, if necessary

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rw-getreddit')
		.setDescription('Gets a random post from the specified subreddit')
		.addStringOption(option => option.setName('subreddit').setDescription('The subreddit to pull from (do not include the r/)')),
	async execute(interaction) {
        await interaction.deferReply();
		var subreddit = interaction.options.getString('subreddit');
		const url = `https://api.reddit.com/r/${ subreddit }/hot/.json?limit=100`;

        //node-fetch the url
        const { data } = await fetch(url).then(response => response.json());
        var limit = data.dist - 1;
        
        //Get a random number btwn 0 and 1; multiply with max posts and round down to get child index
        const index = Math.floor(Math.random() * limit);

        const post_title = data.children[index].data.title;
        const post_url = data.children[index].data.url;
        const post_selftext = data.children[index].data.selftext;
        const post_isself = data.children[index].data.is_self;
        const post_permalink = data.children[index].data.permalink;
        
        //Trim selftext to avoid embed errors
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        //Check if post is not just text using the is_self property
        if (!post_isself) {
            const embed = new MessageEmbed()
                .setColor("#F3450F")
                .setDescription(`Here you go ${ interaction.user }`)
                .setTitle(`${ post_title }`)
                .setDescription(`Link: [${ post_permalink }](https://www.reddit.com${ post_permalink })\n\n${ trim(post_selftext, 1024) }`)
                .setImage(`${ post_url }`)
                .setFooter(`This post is from r/${ subreddit }`)
            interaction.editReply({ embeds: [embed] });
        }
        else {
            const embed = new MessageEmbed()
                .setColor("#F3450F")
                .setTitle(`${ post_title }`)
                .setDescription(`Link: [${ post_permalink }](https://www.reddit.com${ post_permalink })\n\n${ trim(post_selftext, 1024) }`)
                .setFooter(`This post is from r/${ subreddit }`)
            interaction.editReply({ embeds: [embed] });
        }
	},
};