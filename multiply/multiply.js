// Native Requires
const fs = require('fs');
const colors = require('colors');

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base))
            return reject({ message: 'Please enter a valid number.' });

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`./tables/table-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve({ name: `table-${ base }.txt` });
        });
    });
}

let listTable = (base, limit) => {
    if (!Number(base) || !Number(limit))
        return console.log('Please enter valid numbers.'.red);

    console.log('========================'.yellow);
    console.log(`Talbe of ${base}`.yellow);
    console.log('========================'.yellow);

    for (let i = 1; i <= limit; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

module.exports = {
    createFile,
    listTable
};