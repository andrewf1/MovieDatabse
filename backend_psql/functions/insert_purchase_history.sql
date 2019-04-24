CREATE OR REPLACE FUNCTION insert_purchase_history(email_i varchar, mid_i integer)
RETURNS INTEGER
LANGUAGE 'plpgsql'
volatile
SECURITY DEFINER
AS $BODY$

DECLARE
date_rented_i date := now();
due_date_i date := date_rented_i + interval '5 days';
row_change integer;

BEGIN
	INSERT INTO purchase_history (email, mid, date_rented, due_date)
	VALUES (email_i, mid_i, date_rented_i, due_date_i);
	GET DIAGNOSTICS row_change = ROW_COUNT;
	return row_change;
END;
$BODY$;
