// let ws: WebSocket = new WebSocket('ws://localhost:8080/backend/endpoint');
let ws: WebSocket = new WebSocket('ws://192.168.18.105:8080/backend/endpoint');
// let ws: WebSocket;// = new WebSocket('ws://localhost:8080/backend/endpoint');
export const EVENTOS = {
  MOVER_BARCO: 'mb',
  DISPARO: 'd',
};

const eventos = Object.values(EVENTOS).reduce(
  (p: any, c: any) => {
    // eslint-disable-next-line no-param-reassign
    p[c] = new Set();
    return p;
  },
  {},
);

export const conectar = () => { ws = new WebSocket('ws://localhost:8080/backend/endpoint'); };

export const addhandler = (event, handler) => { eventos[event].add(handler); };

ws.onmessage = (msg) => {
  try {
    const data = JSON.parse(msg.data);
    eventos[data.evento].forEach((h) => h(data));
  } catch (e) {
    console.log(e);
  }
};

export const enviar = (evento, data) => ws.send(JSON.stringify({ evento, ...data }));
