/**
@brief: function that retrieves the title and the stock of each item in the shopping cart
usage: select title_r, stock_r from get_all_shopping_cart();
*/

CREATE OR REPLACE FUNCTION get_all_shopping_cart()
	RETURNS TABLE (title_r varchar, stock_r integer, mid_r integer)
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

DECLARE

BEGIN
	return query select title, stock, mid from movie natural join shopping_cart;
END;
$BODY$;