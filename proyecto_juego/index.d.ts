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
}

declare interface Pesquero extends Vehiculo {
  tiempoPesca: number,
  restoPesca: number,
}

declare interface Patrulla extends Vehiculo {
  armas: Arma[],
}

declare interface Arma {
  id: number,
  type: string,
  danio: number,
  cadencia: number,
  sprite: string,
  velocidad: number,
  sonido: string
}
