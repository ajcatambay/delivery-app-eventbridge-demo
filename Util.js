module.exports = {
    ticketNumberGenerator: () => {
        let result           = [];
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * 
         charactersLength)));
        }

        return result.join('');
    }
}