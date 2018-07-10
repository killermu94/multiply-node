const params = {
    base: { demand: true, alias: 'b' },
    limit: { alias: 'l', default: 10 }
};

// Packages requires
const argv = require('yargs')
    .command('list', 'Print in terminal the multiply table', params)
    .command('create', 'Make txt file with multiply table', params)
    .help()
    .argv;

module.exports = {
    argv
};