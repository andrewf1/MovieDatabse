CREATE OR REPLACE FUNCTION delete_shopping_cart(mid_i integer)
	RETURNS integer
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;

BEGIN
	delete from shopping_cart where mid = mid_i;
	GET DIAGNOSTICS row_change = ROW_COUNT;
	
END;
$BODY$; 