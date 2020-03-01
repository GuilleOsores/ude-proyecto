const ws = new WebSocket('ws://192.168.1.3:8080/backend/endpoint');

export const EVENTOS = {
  MUEVO_BARCO: 'muevo_barco',
};

export const getWs = () => ws;
