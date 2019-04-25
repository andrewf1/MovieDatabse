CREATE OR REPLACE FUNCTION get_checked_out_movies(email_i varchar)
	RETURNS table(mid_r integer, title_r varchar, due_date_r date, date_rented_r date)
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

BEGIN
	return query select P.mid, M.title, P.due_date::date, P.date_rented::date from movie M 
	natural join 
	purchase_history P where email = email_i AND return_date IS NULL;
END;
$BODY$;