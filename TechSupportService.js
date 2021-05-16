'use strict';

const Util = require('./Util');

exports.handler = (event, context, callback) => {
    console.log('Customer support request for Tech received.');
    const ticketNum = Util.ticketNumberGenerator();
    console.log(`Ticket ID generated. ${ticketNum}`);
    console.log(event);
    callback(null, 'Finished');
};