CREATE OR REPLACE FUNCTION increment_movie_stock(mid_i integer)
	RETURNS integer
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
new_stock integer;
row_change integer;

BEGIN
	select stock into new_stock from movie where mid = mid_i;
	new_stock := new_stock + 1;

	update movie set stock = new_stock where mid = mid_i;
	GET DIAGNOSTICS row_change = ROW_COUNT;

	return row_change;
END;
$BODY$;