CREATE OR REPLACE FUNCTION update_customer(old_email varchar, new_value varchar, type integer)
	RETURNS integer
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;

BEGIN
	IF type = 1 THEN
		update customer set email = new_value where email = old_email;
		GET DIAGNOSTICS row_change = ROW_COUNT;
		return row_change;
	END IF;

	IF type = 2 THEN
		update customer set pass_word = new_value where email = old_email;
		GET DIAGNOSTICS row_change = ROW_COUNT;
		return row_change;
	END IF;

	IF type = 3 THEN
		update customer set address = new_value where email = old_email;
		GET DIAGNOSTICS row_change = ROW_COUNT;
		return row_change;
	END IF;

	return 0;
END;
$BODY$;