create table medicos (
	id_medico int,
	nombre_medico varchar(25),
	apellido_medico varchar(25),
	nro_matricula varchar(25),
	especialidad varchar(50)
);

create table pacientes (
	id int,
	nombre varchar(25),
	apellido varchar(25),
	rut varchar(12),
	telefono varchar(12)
)

drop table medicos;

drop table pacientes;

select * from medicos;

select * from pacientes;

-- insert medicos

insert into medicos
(id_medico, nombre_medico, apellido_medico, nro_matricula, especialidad) values
(20, 'Juan Pablo', 'Macaya', '12345', 'Pediatra');

insert into medicos
(id_medico, nombre_medico, apellido_medico, nro_matricula, especialidad) values
(21, 'Maria Ignacia', 'Gonzalez', '12346', 'General');

insert into medicos
(id_medico, nombre_medico, apellido_medico, nro_matricula, especialidad) values
(22, 'Javiera', 'Cortez', '12347', 'Oncologa');

insert into medicos
(id_medico, nombre_medico, apellido_medico, nro_matricula, especialidad) values
(23, 'Nelson', 'Osnayo', '12348', 'Cirujano');

insert into medicos
(id_medico, nombre_medico, apellido_medico, nro_matricula, especialidad) values
(24, 'Nicole', 'Medina', '12349', 'Traumatologo');

-- pacientes--

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(303, 'Pedro', 'Gonzalez', '26766236-4', '996985223');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(304, 'Carlos', 'Morales', '26387836-4', '940985633');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(305, 'Maria', 'Marquez', '26386285-4', '940985363');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(306, 'Juana', 'Stevens', '26387836-4', '940982323');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(307, 'Mildfroe', 'Suarez', '26126236-4', '940255223');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(308, 'Juan', 'Juarez', '26389636-4', '940895223');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(309, 'Saul', 'Ledezma', '26388936-4', '940985223');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(310, 'Kiaara', 'Sanchhez', '26323236-4', '940258223');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(311, 'Liana', 'Roa', '26345236-4', '940936923');

insert into pacientes
(id, nombre, apellido, rut, telefono) values
(312, 'Lili', 'Gutierrez', '26786236-4', '936985223');

select * from pacientes;
