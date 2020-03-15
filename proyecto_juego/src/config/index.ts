const BACKEND_BASE_URL = 'http://localhost:8080/backend';
const BACKEND_WS = 'ws://localhost:8080/backend/endpoint';

export const endpoint = {
  crearPartida: (nickName, bando) => `${BACKEND_BASE_URL}/crearpartida?nickName=${nickName}&bando=${bando}`,
  getPartida: () => `${BACKEND_BASE_URL}/getpartida`,
  unirsePartida: (nickName) => `${BACKEND_BASE_URL}/unirsepartida?nickName=${nickName}`,
  ws: () => BACKEND_WS,
};
