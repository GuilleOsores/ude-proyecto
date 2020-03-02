const ws = new WebSocket('ws://192.168.1.3:8080/backend/endpoint');

ws.onopen = (msg) => {
  console.log('Mensaje: ' + msg);
};

export const EVENTOS = {
  CREAR_PARTIDA: 'crear_partida',
  MUEVO_BARCO: 'muevo_barco',
};

export const getWs = () => ws;
