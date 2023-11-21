import { internetStatus } from "./internetStatus";
import { internetStatusApp } from "./internetStatusApp";
import { internetCommand } from "./internetStatusCommand";

// Cliente Internet
const liberaInternet = new internetStatus('Gustavo Santos');

// Command
const liberainternetCommand = new internetCommand(liberaInternet);

//Criando função de soma e subtração das faturas
const liberaInternetApp = new internetStatusApp();
liberaInternetApp.addCommand('Fatura', liberainternetCommand);

liberaInternetApp.subtraiCommand('Fatura');
liberaInternetApp.somaCommand('Fatura');
liberaInternetApp.somaCommand('Fatura');
liberaInternetApp.subtraiCommand('Fatura');
liberaInternetApp.somaCommand('Fatura');

// Para executar = npx sucrase-node main.ts