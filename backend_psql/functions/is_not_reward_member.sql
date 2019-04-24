CREATE OR REPLACE FUNCTION is_not_reward_member(email_i varchar)
	RETURNS boolean
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

BEGIN
	IF (SELECT COUNT(*) FROM reward_member where email = email_i) <> 0 THEN
		return false;
	ELSE
		return true;
	END IF;
END;
$BODY$; 