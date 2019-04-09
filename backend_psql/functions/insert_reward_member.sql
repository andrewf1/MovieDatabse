CREATE OR REPLACE FUNCTION insert_reward_member(uid_i int, points_i int)
RETURNS boolean
LANGUAGE 'plpgsql'
volatile
SECURITY DEFINER
AS $BODY$

DECLARE
row_change integer;
BEGIN
	INSERT INTO reward_member (uid, points) values (uuid_i, points_i);
	GET DIAGNOSTICS row_change = ROW_COUNT;

	IF row_change = 1 THEN
		return true;
	ELSE
		return false;
	END IF;
END;
$BODY$;