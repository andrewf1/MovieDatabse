package database;

public class Purchase_History {
//Data Members
    String rented_date;
    String due_date;
    String return_date;
    double price;

//Constructors
    public class (String rented_date, String due_date, String return_date, double price) {
        this.rented_date = rented_date;
        this.due_date = due_date;
        this.return_date = return_date;
        this.price = price;
}

//Accessors
    public String getRented_date() {
        return rented_date;
    }

    public String getDue_date() {
        return due_date;
    }

    public String getReturn_date() {
        return return_date;
    }

    public double getPrice() {
        return price;
    }
}