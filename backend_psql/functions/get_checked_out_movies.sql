CREATE OR REPLACE FUNCTION get_checked_out_movies(email_i varchar)
	RETURNS table(mid_r integer, title_r varchar, due_date_r date, date_rented date)
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE

BEGIN
	return query select P.mid, M.title, P.due_date, P.date_rented from movie M natural join 
	purchase_history P where email = email_i AND return_date IS NULL;
END;
$BODY$;