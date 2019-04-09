/**
@brief: function that inserts a new customer given all it's needed information. Called during sign up
usage: select insert_customer from insert_customer('Andrew', 'Fernandez', 'email@email.com', 
'06/11/1997', '123 Main Street Tampa, FL 34683', 'passwoRD.123');

returns 0 : successful, returns 1 : improper email, returns 2 : email already exists
*/
CREATE OR REPLACE FUNCTION insert_customer(fname_i varchar, lname_i varchar, email_i varchar, dob_i
	date, address_i varchar, pass_word_i varchar)
RETURNS INTEGER
LANGUAGE 'plpgsql'
volatile
SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;
successful integer := 0;
improper_email integer := 1;
email_exists integer  := 2;

BEGIN
	IF (SELECT COUNT(*) FROM customer where email = email_i) = 0 THEN
		RETURN email_exists; -- checks if the email exists
	END IF;

	insert into customer (fname, lname, email, dob, address, pass_word)
	values (fname_i, lname_i, email_i, dob_i, address_i, pass_word_i);
	GET DIAGNOSTICS row_change = ROW_COUNT;

	IF row_change = 1 THEN
		return successful;
	ELSE
		return improper_email;
	END IF; 
END;
$BODY$;