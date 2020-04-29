CREATE SCHEMA proyectoude;
USE proyectoude;

-- Tabla Jugadores
CREATE TABLE jugadores (
	id INT PRIMARY KEY,
    nick VARCHAR(25)
);

-- Tabla Barcos
CREATE TABLE barcos (
	id INT,
    idJugador INT,
    posicionX FLOAT,
    posicionY FLOAT,
    tipo VARCHAR(15),
    tipoBarco VARCHAR(15),
    vida FLOAT,
    cantPescados INT,
    combustible FLOAT,
    initialRotation FLOAT,
    CONSTRAINT pkBarcos PRIMARY KEY (id, idJugador),
    CONSTRAINT fkBarcosJugador FOREIGN KEY (idJugador) REFERENCES jugadores(id)
);

-- Tabla Partidas
CREATE TABLE partidas (
	id INT PRIMARY KEY,
    idJugador1 INT,
    idJugador2 INT,
    pecesRestantes INT,
    tiempoRestante INT,
    CONSTRAINT fkPartidaJugador1 FOREIGN KEY (idJugador1) REFERENCES jugadores(id),
    CONSTRAINT fkPartidaJugador2 FOREIGN KEY (idJugador2) REFERENCES jugadores(id)
);

-- Tabla VehiculosAuxiliares (probablemente no se use)

CREATE TABLE vehiculosauxiliares (
	id INT,
    idJugador INT,
    posicionX FLOAT,
    posicionY FLOAT,
    combustible FLOAT,
    CONSTRAINT pkVehiculoAuxiliar PRIMARY KEY (id, idJugador),
    CONSTRAINT fkVehiculoAuxiliarJugador FOREIGN KEY (idJugador) REFERENCES jugadores(id)
);