declare interface SceneConfiguration {
  width: number,
  height: number,
  millaLimite: number,
  time: number,
  fishFished: number,
  jugadores: Jugador[],
}

declare interface Jugador {
  nick: string,
  vehiculos: Pesquero[] | Patrulla[],
}

declare interface Vehiculo {
  id: number,
  sprite: string,
  x: number,
  y: number,
  initialRotation: number,
  velocity: number,
  angularVelocity: number,
  normalSprite: string,
  normalAnimation: string,
  tipo: string,
  spriteLateralInicial: string,
  spritesLaterales: {
    l: string,
    r: string,
    u: string,
    d: string
  },
}

declare interface Pesquero extends Vehiculo {
  tiempoPesca: number,
  restoPesca: number,
  tipoPesquero: string,
}

declare interface Patrulla extends Vehiculo {
  armas: Arma[],
}

declare interface Arma {
  id: number,
  tipo: string,
  danio: number,
  cadencia: number,
  distancia: number,
  sprite: string,
  velocidad: number,
  sonido: string,
  escala: number,
  ttl? : number,
  velocidadAngular?: number,
  puedeNeutralizar: string,
}
