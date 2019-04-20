/**
@brief: function that takes an email and a password as input and ensures that the email exists, and
if it does, ensures the password given is the one associated with the email. It returns true, but 
returns false if it fails
usage: 
*/
CREATE OR REPLACE FUNCTION validate_credentials(email_i varchar, password_i varchar)
	RETURNS boolean
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
temprow RECORD;
BEGIN
	FOR temprow IN (select email, pass_word from customer)
	LOOP	
		IF temprow.email = email_i THEN
			IF temprow.pass_word = password_i THEN
				return true;
			END IF;
		END IF;
	END LOOP;

	return false;
END;
$BODY$;