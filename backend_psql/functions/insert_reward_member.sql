CREATE OR REPLACE FUNCTION insert_reward_member(email_i varchar, points_i int)
RETURNS integer
LANGUAGE 'plpgsql'
volatile
SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;
BEGIN
	INSERT INTO reward_member (email, points) values (email_i, points_i);
	GET DIAGNOSTICS row_change = ROW_COUNT;

	return row_change;
END;
$BODY$;