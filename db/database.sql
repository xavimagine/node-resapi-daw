create DATABASE if not EXISTS microsoft;
use microsoft;

CREATE Table departamentos(
    id INT(40) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60),
    personas INT(100),
    planta INT(10),
    PRIMARY KEY (id)
)

INSERT INTO departamentos(nombre,personas,planta) VALUES 
('John',30,3),
('Anna',130,4),
('Antonio',2,1),
('Rebeca',1,6);