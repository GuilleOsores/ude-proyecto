declare interface SceneConfiguration {
  width: number,
  height: number,
  fishingMile: number,
  time: number,
  fishFished: number,
  players: Player[],
}

declare interface Player {
  nick: string,
  vehicles: VehicleConfiguration[],
}

declare interface VehicleConfiguration {
  id: number,
  sprite: string,
  x: number,
  y: number,
  initialRotation: number,
  velocity: number,
  angularVelocity: number,
  normalSprite: string,
  normalAnimation: string,
  millaLimite: number,
  tiempoPesca: number
  armas: Armas[],
  tipo: string,
  restoPesca:number
}

declare interface Armas {
  id: number,
  type: string,
  danio: number,
  cadencia: number,
}
