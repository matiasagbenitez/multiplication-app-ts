import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .options('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Es el límite de la tabla de multiplicar'
    })
    .options('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .options('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: "Nombre del archivo",
    })
    .options('d', {
        alias: 'destination',
        type: 'string',
        default: '',
        describe: 'Destino del archivo'
    })
    .check((argv, options) => {
        const { b } = argv;
        if (typeof b !== 'number') throw 'Error: la base debe ser un número';
        if (b < 1) throw 'Error: la base debe ser mayor a 0';
        return true;
    })
    .parseSync();
