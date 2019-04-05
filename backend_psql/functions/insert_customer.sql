/**
@brief: function that inserts a new customer given all it's needed information. Called during sign up
usage: select insert_customer from insert_customer('Andrew', 'Fernandez', 'email@email.com', 
'06/11/1997', '123 Main Street Tampa, FL 34683', 'passwoRD.123');
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
improper_password integer := 1;
improper_email integer := 2;
email_exists integer  := 3;

BEGIN
	insert into customer (fname, lname, email, dob, address, pass_word)
	values (fname_i, lname_i, email_i, dob_i, address_i, pass_word_i);
	GET DIAGNOSTICS row_change = ROW_COUNT;

	IF row_change = 1 THEN
		return successful;
	ELSE
		return false;
	END IF; 
END;
$BODY$;

CHANGE TO RETURN INT INSTEAD OF BOOLEAN