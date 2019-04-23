CREATE OR REPLACE FUNCTION insert_purchase_history(uid_i integer, 
	email_i varchar, mid_i integer, due_date_i date, date_rented_i)
RETURNS INTEGER
LANGUAGE 'plpgsql'
volatile
SECURITY DEFINER
AS $BODY$

DECLARE

BEGIN
	INSERT INTO purchase_history ()
END;
$BODY$;
