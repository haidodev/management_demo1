CREATE TABLE customer (
    INT id PRIMARY KEY,
    VARCHAR(20) name,
    VARCHAR(10) phone_number,
    VARCHAR(20) department
)
CREATE TABLE house (
    INT id PRIMARY KEY,
    VARCHAR(20) address,
    INT price,
    VARCHAR(20) onwer

)
CREATE TABLE contract (
    INT customer_id REFERENCES customer(id),
    INT house_id REFERENCES house(id),
    DATE start_date,
    DATE end_date,
    CONSTRAINT PRIMARY(customer_id, house_id)
)
SELECT address, onwer
FROM house
WHERE price < 10000000;

SELECT customer.id, name, phone_number, department
FROM 
    house
    JOIN contract ON house.id = contract.house_id
    JOIN customer ON customer.id = contract.customer_id
WHERE onwer = 'Nong Van Den';

SELECT *
FROM house
EXCEPT 
SELECT id, address, price, onwer
FROM 
    house 
    JOIN contract ON house.id = contract.house_id;

