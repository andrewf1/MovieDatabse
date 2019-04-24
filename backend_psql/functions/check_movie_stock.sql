CREATE OR REPLACE FUNCTION check_movie_stock(mid_i integer)
	RETURNS boolean
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
curr_stock integer;

BEGIN
	select stock into curr_stock from movie where mid = mid_i;

	IF curr_stock > 0 THEN 
		return true;
	ELSE
		return false;
	END IF;
END;
$BODY$;