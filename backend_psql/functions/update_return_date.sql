CREATE OR REPLACE FUNCTION update_return_date(transaction_num_i integer)
	RETURNS integer
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;
new_return_date date := now()::date;
BEGIN
	update purchase_history set return_date = new_return_date where transaction_num = 
		transaction_num_i;
	GET DIAGNOSTICS row_change = ROW_COUNT;
	return row_change;
END;
$BODY$;