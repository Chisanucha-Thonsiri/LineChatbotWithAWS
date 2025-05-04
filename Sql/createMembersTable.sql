CREATE TABLE MEMBERS
(
    id int primary key,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    fname VARCHAR(150) NOT NULL,
    lname VARCHAR(150) NOT NULL,
    user_line VARCHAR(150) DEFAULT NULL,
    line_connected BOOLEAN NOT NULL DEFAULT FALSE
)