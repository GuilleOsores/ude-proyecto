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
}
