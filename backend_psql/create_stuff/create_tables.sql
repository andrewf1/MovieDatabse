-- this file contains the sql to create the tables for the database
CREATE TABLE customer
(
	uid INT NOT NULL DEFAULT NEXTVAL('uid'),
	fname VARCHAR(15) NOT NULL,
	lname VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	dob DATE NOT NULL,
	address VARCHAR(100) NOT NULL,
	pass_word VARCHAR(30) NOT NULL CHECK (pass_word LIKE '

		%[0-9]%' AND pass_word LIKE '%[A-Z]%' AND 
		pass_word LIKE '%[!@#$%a^&*()-_+=.,;:"`~]%' AND length(pass_word) >= 8 AND length(pass_word)
		<= 30),
	CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
	PRIMARY KEY (uid)
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
	rid INT NOT NULL,
	points INT NOT NULL CHECK (points > 0),
	PRIMARY KEY (rid),
	FOREIGN KEY (rid) REFERENCES customer (uid)
	ON UPDATE CASCADE
	ON DELETE NO ACTION
);