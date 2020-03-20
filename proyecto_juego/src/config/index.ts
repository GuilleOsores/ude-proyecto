const { CONFIG: { HOST } } = <any>window;
const BACKEND_BASE_URL = `http://${HOST}/backend`;
const BACKEND_WS = `ws://${HOST}/backend/endpoint`;

export const endpoint = {
  crearPartida: (nickName, bando) => `${BACKEND_BASE_URL}/crearpartida?nickName=${nickName}&bando=${bando}`,
  getPartida: () => `${BACKEND_BASE_URL}/getpartida`,
  unirsePartida: (nickName) => `${BACKEND_BASE_URL}/unirsepartida?nickName=${nickName}`,
  guardarPartida: () => `${BACKEND_BASE_URL}/guardarpartida`,
  listarPartidas: () => `${BACKEND_BASE_URL}/listarpartidas`,
  cargarPartida: () => `${BACKEND_BASE_URL}/cargarpartida`,
  ws: () => BACKEND_WS,
};
