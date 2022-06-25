
-- Crear una base de datos con nombre “Posts”.

create TABLE post (
    id int,
	nombre_usuario varchar(25),
	fecha_de_creacion varchar(25),
	contenido varchar (250),
	descripcion varchar (150),
	primary key (id)
)

select * from post;

drop table post;

insert into post
(id, nombre_usuario, fecha_de_creacion, contenido, descripcion) values
(1, 'Pamela', '10-10-2020', 'Contenido del primer post', 'Descripcion del primer post')

insert into post
(id, nombre_usuario, fecha_de_creacion, contenido, descripcion) values
(2, 'Pamela', '11-10-2020', 'Contenido del segundo post', 'Descripcion del segundo post')

insert into post
(id, nombre_usuario, fecha_de_creacion, contenido, descripcion) values
(3, 'Carlos', '11-10-2020', 'Contenido del post de carlos', 'Descripcion del post de carlos')

ALTER TABLE post ADD titulo varchar(25);

UPDATE post
SET titulo = 'Tiulo 1 Pruebas'
WHERE id = 1;

UPDATE post
SET titulo = 'Tiulo 2 Pruebas'
WHERE id = 2;

UPDATE post
SET titulo = 'Tiulo 3 Pruebas'
WHERE id = 3;

insert into post
(id, nombre_usuario, fecha_de_creacion, contenido, descripcion, titulo) values
(4, 'Carlos', '11-10-2020', 'Contenido del post de carlos', 'Descripcion del post de carlos', 'Tiulo 4 Pruebas')

select * from post;

-- Agregue update porque me equivoque en la creacion de post de pedro
UPDATE post
SET nombre_usuario = 'Pedro'
WHERE id = 4;

UPDATE post
SET contenido = 'Contenido del post de Pedro'
WHERE id = 4;

UPDATE post
SET descripcion = 'Descripcion del post de Pedro'
WHERE id = 4;

insert into post
(id, nombre_usuario, fecha_de_creacion, contenido, descripcion, titulo) values
(5, 'Pedro', '12-10-2020', 'Contenido del post de Pedro', 'Descripcion del post de Pedro', 'Tiulo 5 Pruebas')

