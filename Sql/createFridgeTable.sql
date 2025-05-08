CREATE TABLE fridge
(
    id INT PRIMARY KEY,
    material VARCHAR(150) NOT NULL,
    is_store BOOLEAN NOT NULL,
    exp DATE NOT NULL,
    image VARCHAR(150) NOT NULL,
    price INT DEFAULT NULL,
    type VARCHAR(150) NOT NULL,
    owner INT, 
    CONSTRAINT fk_owner FOREIGN KEY (owner) REFERENCES MEMBERS(id)
);