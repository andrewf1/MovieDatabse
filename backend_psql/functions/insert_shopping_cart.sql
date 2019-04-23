CREATE OR REPLACE FUNCTION insert_shopping_cart (mid_i integer)
	RETURNS integer
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;

BEGIN
	insert into shopping_cart (mid) values (mid_i);
	GET DIAGNOSTICS row_change = ROW_COUNT;

	RETURN row_change;
END;
$BODY$;