drop table socio;
drop table libro;
drop table prestamo_libro;

SELECT * FROM socio;

create table socio (
	rut varchar(15),
	nombre varchar(25),
	apellido varchar(25),
	direccion varchar(40),
	telefono int,
	primary key (rut)
);

SELECT * FROM libro;

create table libro (
	ISBN varchar(15),
	titulo varchar(50),
	nro_pagina int,
	codigo_autor int,
	nombre_autor varchar(25),
	apellido_autor varchar(25),
	fnac_fmuerte varchar(12),
	tipo_autor varchar(10),
	primary key (ISBN, codigo_autor)
);

SELECT * FROM prestamo_libro;

ALTER TABLE libro
ADD dia_prestamo varchar(255);

create table prestamo_libro (
	rut_socio varchar(15),
	socio varchar(40),
	ISBN_libro varchar(15),
	codigo_autor int,
	libro varchar(50),	
	fecha_prestamo date,
	fecha_esperada_dev date,
	fecha_real_dev date,	
	primary key (rut_socio, ISBN_libro, fecha_prestamo),
	foreign key (rut_socio) references socio(rut),
	foreign key (ISBN_libro, codigo_autor) references libro(ISBN, codigo_autor)
);

SELECT * FROM socio;
SELECT * FROM libro;
SELECT * FROM prestamo_libro;

select titulo, nro_pagina from libro
	where nro_pagina < 300;

select nombre_autor, apellido_autor, fnac_fmuerte from libro where libro.fnac_fmuerte > '1970'
	order by fnac_fmuerte asc;

select prestamo_libro.ISBN_libro, count(prestamo_libro.ISBN_libro) as total from prestamo_libro
	group by prestamo_libro.ISBN_libro
	order by total desc;

select  rut_socio,
(select fecha_real_dev - fecha_esperada_dev as atraso),
(select fecha_real_dev-fecha_esperada_dev)*100 as multa_$
from prestamo_libro
where fecha_real_dev-fecha_esperada_dev > 0;

insert into socio values 
	('1111111-1', 'juan', 'soto', 'avenida 1, santiago', 911111111),
	('2222222-2', 'ana', 'perez', 'pasaje 2, santiago', 922222222),
	('3333333-3', 'sandra', 'aguilar', 'avenida 2, santiago', 933333333),
	('4444444-4', 'esteban', 'jerez', 'avenida 3, santiago', 944444444),
	('5555555-5', 'silvana', 'mu oz', 'pasaje 3, santiago', 955555555);
	
insert into libro values 
	('111-1111111-111', 'cuentos de terror', 344, 3, 'jose', 'salgado', '1968-2020', 'principal', 7),
	('111-1111111-111', 'cuentos de terror', 344, 4, 'ana', 'salgado', '1972-', 'coautor', 7),
	('222-2222222-222', 'poesias contemporaneas', 167, 1, 'andres', 'ulloa', '1982-', 'principal', 7),
	('333-3333333-333', 'historia de asia', 511, 2, 'sergio', 'mardones', '1950-2012', 'principal', 14),
	('444-4444444-444', 'manual de mecanica', 298, 5, 'martin', 'porta', '1976-', 'principal', 14);
	
insert into prestamo_libro values 
	('1111111-1', 'juan soto', '111-1111111-111', 3, 'cuentos de terror', '2020-01-20', '2020-01-27', '2020-01-27'),
	('5555555-5', 'silvana muñoz', '222-2222222-222', 1, 'poesias contemporaneas', '2020-01-20', '2020-01-27', '2020-01-30'),
	('3333333-3', 'sandra aguilar', '333-3333333-333', 2, 'historia de asia', '2020-01-22', '2020-02-05', '2020-01-30'),
	('4444444-4', 'esteban jerez', '444-4444444-444', 5, 'manual de mec nica', '2020-01-23', '2020-02-06', '2020-01-30'),
	('2222222-2', 'ana perez', '111-1111111-111', 3, 'cuentos de terror', '2020-01-27', '2020-02-03', '2020-02-04'),
	('1111111-1', 'juan soto', '444-4444444-444', 5, 'manual de mecanica', '2020-01-31', '2020-02-14', '2020-02-12'),
	('3333333-3', 'sandra aguilar', '222-2222222-222', 1, 'poesias contemporaneas', '2020-01-31', '2020-02-07', '2020-02-12');

