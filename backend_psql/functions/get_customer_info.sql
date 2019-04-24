CREATE OR REPLACE FUNCTION get_customer_info(email_i varchar)
	RETURNS TABLE (fname_r varchar, lname_r varchar, address_r varchar, dob_r date)
	LANGUAGE 'plpgsql'
	volatile
	SECURITY DEFINER
AS $BODY$

BEGIN
	return query select fname, lname, address, dob from customer where email = email_i;
END;
$BODY$;