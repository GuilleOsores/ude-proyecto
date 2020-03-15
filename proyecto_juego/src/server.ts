// let ws: WebSocket = new WebSocket('ws://localhost:8080/backend/endpoint');
// let ws: WebSocket = new WebSocket('ws://localhost:8080/backend/endpoint');
// let ws: WebSocket;// = new WebSocket('ws://localhost:8080/backend/endpoint');
export const EVENTOS = {
  MOVER_BARCO: 'mb',
  DISPARO: 'd',
  FINALIZAR: 'f',
  INICIAR_PARTIDA: 'iniciarPartida',
  PAUSAR: 'p',
  DESPERTAR: 'des',
};

const eventos = Object.values(EVENTOS).reduce(
  (p: any, c: any) => {
    // eslint-disable-next-line no-param-reassign
    p[c] = new Set();
    return p;
  },
  {},
);

let ws:WebSocket = null;

export const addhandler = (event, handler) => { eventos[event].add(handler); };

export async function startWebSocket() {
  return new Promise((resolve, reject) => {
    ws = new WebSocket('ws://localhost:8080/backend/endpoint');
    ws.onopen = function () {
      console.log('connected!');
      resolve();
    };
    ws.onmessage = function (msg) {
      try {
        console.log(msg.data);
        const data = JSON.parse(msg.data);
        console.log('msg: ',data);
        console.log('eventos', eventos);
        console.log('eventos', eventos[data.evento]);
        eventos[data.evento].forEach((h) => h(data));
      } catch (e) {
       console.log(e);
      }
    };
    ws.onclose = function () {
      console.log('failed!');
      resolve(startWebSocket());
    };
  });
}

export const enviar = (evento, data) => {
  try {
    ws.send(JSON.stringify({ evento, ...data }));
  } catch (e) {
    console.log('ws error (si no queres que te joda éste mensaje y no queres ' + 'conectarlo con el server, comentá el send de arriba): ', e);
  }
};
