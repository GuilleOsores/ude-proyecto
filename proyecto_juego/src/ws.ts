const ws = new WebSocket('ws://localhost:8080/backend/endpoint');

export const EVENTOS = {
  MUEVO_BARCO: 'muevo_barco',
};
export const getWs = () => ws;
