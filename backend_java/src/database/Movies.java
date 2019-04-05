package database;

public class Movies {
//Data members
    String title;
    String genre;
    int year;
    int stock = 5; 
    int price = 3;

//Constructor
    public class (String title, String genre, int year, int stock, int price) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.stock = stock;
        this.price = price;
    }

//Accessors
    public String getTitle() {
        return title;
    }

    public String getGenre() {
        return genre;
    }
    
    public int getYear() {
        return year;
    }

    public int getStock() {
        return stock;
    }

    public int getPrice() {
        return price;
    }
}
