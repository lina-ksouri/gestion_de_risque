 create table IF NOT EXISTS category (
                     id_cat  serial not null,
                      description varchar(500),
                      name varchar(255) not null UNIQUE,
                      primary key (id_cat)
 );

  create table IF NOT EXISTS control (
                      id_control  serial not null,
                       description varchar(3000),
                       name varchar(255) ,
                       primary key (id_control)
  );