export type Velocity = {
  x: number,
  y: number
};

const obtenerVelocidadX = (a) => Math.cos(a);
const obtenerVelocidadY = (a) => Math.sin(a);

export const getVelocity = (forward: boolean, angle: number, speed: number): Velocity => {
  let x: number; let y: number;
  if (forward) {
    x = speed * obtenerVelocidadX(angle);
    y = speed * obtenerVelocidadY(angle);
  } else {
    x = -speed * obtenerVelocidadX(angle);
    y = -speed * obtenerVelocidadY(angle);
  }
  return { x, y };
};

export const getRotation = (
  forward: boolean, left: boolean, rotation: number, turningSpeed: number,
): number => {
  let newRotation;
  if (left) {
    if (forward) {
      newRotation = rotation - turningSpeed;
    } else {
      newRotation = rotation + turningSpeed;
    }
  } else if (forward) {
    newRotation = rotation + turningSpeed;
  } else {
    newRotation = rotation - turningSpeed;
  }

  return newRotation;
};
