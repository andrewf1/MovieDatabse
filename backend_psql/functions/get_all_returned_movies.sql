CREATE OR REPLACE FUNCTION get_all_returned_movies(email_i varchar) 
	RETURNS TABLE (title_r varchar)
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

BEGIN
	return query select title from movie natural join purchase_history where email = email_i and
	return_date IS NOT NULL;
END;
$BODY$;