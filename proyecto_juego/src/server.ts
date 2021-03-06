import axios from 'axios';
import * as config from './config';

export const EVENTOS = {
  MOVER_BARCO: 'mb',
  DISPARO: 'd',
  FINALIZAR: 'f',
  INICIAR_PARTIDA: 'iniciarPartida',
  PAUSAR: 'p',
  DESPERTAR: 'des',
  PESCA_JUGADOR: 'pj',
  PESCA_BARCO: 'pb',
  COMBUSTIBLE: 'c',
  SALIR: 's',
};

let ws: WebSocket = null;
let eventos;
let autoReconectar = true;

const inicializarListeners = () => {
  eventos = Object.values(EVENTOS).reduce(
    (p: any, c: any) => {
    // eslint-disable-next-line no-param-reassign
      p[c] = new Set();
      return p;
    },
    {},
  );
};

inicializarListeners();

export const addhandler = (event, handler) => { eventos[event].add(handler); };

export async function startWebSocket() {
  autoReconectar = true;
  return new Promise((resolve) => {
    ws = new WebSocket(config.endpoint.ws());
    ws.onopen = () => {
      console.log('connected!');
      resolve();
    };
    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data);
        eventos[data.evento].forEach((h) => h(data));
      } catch (e) {
        console.log(msg, e);
      }
    };
    ws.onclose = () => {
      console.log('failed!');
      if (autoReconectar) {
        resolve(startWebSocket());
      }
    };
  });
}

export const desconectarWs = () => {
  autoReconectar = false;
  ws.close();
};

export const enviar = (evento, data) => {
  try {
    ws.send(JSON.stringify({ evento, ...data }));
  } catch (e) {
    console.log('ws error (si no queres que te joda éste mensaje y no queres '
    + 'conectarlo con el server, comentá el send de arriba): ', e);
  }
};

export const guardarPartida = () => axios(config.endpoint.guardarPartida());
export const crearPartida = (nick, bando) => axios(config.endpoint.crearPartida(nick, bando));
export const unirsePartida = (nick) => axios(config.endpoint.unirsePartida(nick));
export const getPartida = () => axios(config.endpoint.getPartida());
export const finalizarPartida = () => axios(config.endpoint.finalizarPartida());
export const removerListeners = inicializarListeners;
