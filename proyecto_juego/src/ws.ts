const ws = new WebSocket('ws://192.168.18.106:8080/backend2/endpoint');

export const EVENTOS = {
  MUEVO_BARCO: 'muevo_barco',
};
export const getWs = () => ws;
