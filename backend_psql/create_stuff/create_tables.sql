-- this file contains the sql to create the tables for the database
CREATE TABLE customer
(
	fname VARCHAR(15) NOT NULL,
	lname VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	dob DATE NOT NULL,
	address VARCHAR(100) NOT NULL,
	pass_word VARCHAR(32) NOT NULL,
	CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
	PRIMARY KEY (email)
);

CREATE TABLE movie
(
	mid INT NOT NULL DEFAULT NEXTVAL('mid'),
	title VARCHAR(80) NOT NULL,
	genre VARCHAR(25) NOT NULL,
	year INT NOT NULL CHECK (year >= 1900 AND year <= 2020),
	stock INT NOT NULL CHECK (stock >= 0),
	PRIMARY KEY (mid)
);

CREATE TABLE reward_member
(
	email VARCHAR(50) NOT NULL, 
	PRIMARY KEY (email),
	FOREIGN KEY (email) REFERENCES customer (email)
	ON UPDATE CASCADE
	ON DELETE NO ACTION
);

CREATE TABLE purchase_history
(
	transaction_num INT NOT NULL DEFAULT NEXTVAL('transaction_num'),
	email VARCHAR(50) NOT NULL, 
	mid INT NOT NULL,
	return_date DATE,
	due_date DATE NOT NULL,
	date_rented DATE NOT NULL,
	PRIMARY KEY (transaction_num),
	FOREIGN KEY (email) REFERENCES customer (email)
	ON UPDATE CASCADE ON DELETE NO ACTION,
	FOREIGN KEY (mid) REFERENCES movie (mid)
	ON UPDATE CASCADE ON DELETE NO ACTION
);

CREATE TABLE shopping_cart
(
	mid INT NOT NULL,
	PRIMARY KEY (mid),
	FOREIGN KEY (mid) REFERENCES movie (mid)
	ON UPDATE CASCADE ON DELETE CASCADE
);