import chalk from 'chalk'
import { config } from 'dotenv'

config();

if (process.argv.length < 3) {
    console.error('Укажите величину в дюймах');
    process.exit(1);
}
const inches = parseFloat(process.argv[2]);

if (!inches) {
    console.error(chalk.red('Укажите дюймы в виде числа'))
    process.exit(1)
}

const centimetres = inches * 2.54
const colorize = process.env.COLORIZE
if (colorize && colorize === 'no') {
    console.log(`${inches}\" >>>>> ${centimetres} см.`);
    console.log(colorize)
} else {
    console.log(`${chalk.blue(inches)}\" ${chalk.yellow('>>>>>')} ${chalk.green(centimetres)} см.`);
    console.log(colorize)
}


