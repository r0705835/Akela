function reply(message) {
    if (message.content === '!hendrik') {
        message.channel.send('Love you bb!');
    } else if (message.content === '!yordi') {
        message.channel.send('Iemand is jaloers! Nene joh you da best!');
    } else if (message.content === '!robbe') {
        message.channel.send('Spelen we minecraft? I AM YOUR GOD!');
    } else if (message.content === '!daan') {
        message.channel.send('Tekent de mona lisa in zijn vrije tijd!');
    } else if (message.content === '!karel') {
        message.channel.send('Wa ne kerel is mich da hier');
    } else if (message.content === '!donkey') {
        message.channel.send('Ogres have layers');
    } else if (message.content === '!kickdaan') {
        message.channel.send('Daan heeft pijn nu en voelt zich heel slecht, proficiat!');
    } else if (message.content === '!axel') {
        message.channel.send('Er zijn 10 soorten mensen op de wereld, zij die binair verstaan en zij die het niet verstaan');
    } else if (message.content === '!ok') {
        message.channel.send('ok, ik ben meer een fan van okkernoten');
    } else if (message.content === '!hendrick') {
        message.channel.send('Der is een lijst waar mensen zoals gij op gezet worden');
    }
}

module.exports = { reply }