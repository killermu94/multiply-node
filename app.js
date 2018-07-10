//
const colors = require('colors/safe');

// App Requires
const { createFile, listTable } = require('./multiply/multiply');
const { argv } = require('./config/yargs');

const CMD = argv._[0];

switch (CMD) {
    case 'create':
        {
            createFile(argv.b, argv.l).then(rs => {
                console.log(`The file with name: ${ colors.magenta(rs.name) }, has ben succed create.`);
            }).catch(err => console.log(err.message));
            return;
        }

    case 'list':
        {
            listTable(argv.b, argv.l);
            return;
        }

    default:
        {
            console.log('Command not found.');
        }
}