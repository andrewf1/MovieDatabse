CREATE OR REPLACE FUNCTION more_than_three_movies(email_i varchar)
	RETURNS BOOLEAN
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
movies_checked_out bigint;
BEGIN	
	select count(*) into movies_checked_out from purchase_history where email = email_i AND
	return_date IS NULL;

	IF movies_checked_out >= 3 THEN
		return true;
	ELSE
		return false;
	END IF;
END;
$BODY$;