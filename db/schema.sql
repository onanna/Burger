CREATE DATABASE burgers_db;

use burgers_db;

create table burger (
	id INTEGER(11)auto_increment not null,
    burger_name VARCHAR(60) not null,
    devoured BOOLEAN default false,
    date TIMESTAMP,
    primary key(id)
);