CREATE OR REPLACE FUNCTION is_reward_member(email_i varchar)
	RETURNS boolean
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

BEGIN
	IF (SELECT COUNT(*) FROM customer natural join reward_member) <> 0 THEN
		return true;
	ELSE
		return false;
	END IF;
END;
$BODY$; 