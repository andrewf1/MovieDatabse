CREATE OR REPLACE FUNCTION update_return_date(email_i varchar, mid_i integer, return_date_i date)
	RETURNS integer
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;

BEGIN
	update purchase_history set return_date = return_date_i where email = email_i AND 
		mid = mid_i;
	GET DIAGNOSTICS row_change = ROW_COUNT;
	return row_change;
END;
$BODY$;