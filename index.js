// question1 

SELECT * FROM tbl_habitat;

// question 2
SELECT species_name FROM tbl_species WHERE species_order = 3

// question 3
SELECT nutrition_type FROM tbl_nutrition WHERE nutrition_cost <= 600

// question 4

SELECT species_name FROM tbl_nutrition 
INNER JOIN tbl_species ON tbl_nutrition.species_id = tbl_species.species_id
WHERE nutrition_id BETWEEN 2202 AND 2206;

// question 5

SELECT species_name AS Species Name, nutrition_type AS Nutrition Type FROM tbl_nutrition
INNER JOIN tbl_species ON tbl_nutrition.species_id = tbl_species.species_id



// question 6

// question 7

CREATE DATABASE pokemonlist;

CREATE TABLE Pokemons (
    PokemonID int,
    Hp int,
    Attack int,
    Defence int,
    Upgrade varchar(255)
    FOREIGN KEY (ElementID) REFERENCES Elements(ElementID)
);

CREATE TABLE Elements(
    ElementID int,
    Name varchar(255);
);


