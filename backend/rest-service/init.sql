CREATE TABLE IF NOT EXISTS cliente (
    id INTEGER PRIMARY KEY NOT NULL ,
    nombre VARCHAR(55),
    appellido VARCHAR(55),
    telefono VARCHAR(20),
    email VARCHAR(55),
    direccion VARCHAR(55)
);

CREATE TABLE IF NOT EXISTS juegos (
    id INTEGER PRIMARY KEY NOT NULL,
    nombre VARCHAR(55),
    director VARCHAR(55),
    protagonista VARCHAR(55),
    productor VARCHAR(55),
    plataforma VARCHAR(55),
    fecha_lanzamiento DATE
);

CREATE TABLE IF NOT EXISTS alquiler (
    id INTEGER PRIMARY KEY NOT NULL,
    cliente_id INTEGER,
    juego_id INTEGER,
    fecha_alquiler TIMESTAMP,
    fecha_devolucion TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES cliente (id),
    FOREIGN KEY (juego_id) REFERENCES juegos (id)
);

CREATE TABLE IF NOT EXISTS precio (
    id INTEGER PRIMARY KEY NOT NULL,
    juego_id INTEGER,
    precio NUMERIC(10,2),
    FOREIGN KEY (juego_id) REFERENCES juegos (id)
);