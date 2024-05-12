DROP TABLE IF EXISTS estudiantes;

CREATE TABLE estudiantes (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50),
	rut VARCHAR(12),
	curso VARCHAR(50),
	nivel VARCHAR(2)
);

INSERT INTO estudiantes (nombre, rut, curso, nivel)
VALUES 
('Jimmy Hendrix', '16.124.473-0', 'Guitarra', '5'),
('John Lennon', '4.565.350-8', 'Piano', '3'),
('Gene Simmons', '5.767.898-0', 'Bajo', '2'),
('Roger Waters', '2.345.678-9', 'Violin', '1'),
('Freddy Mercury', '1.234.567-8', 'Voz', '5');


SELECT * FROM estudiantes;