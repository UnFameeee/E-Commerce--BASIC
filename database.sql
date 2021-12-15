DROP DATABASE FinalCNTT;

CREATE DATABASE FinalCNTT;
USE FinalCNTT;

CREATE TABLE ACCOUNT(
	Id bigint PRIMARY KEY,
    Username nvarchar(50),
    Password nvarchar(50),
	Role nvarchar(50),
    Active bit
);

CREATE TABLE USER(
	Id bigint PRIMARY KEY,
    Fullname nvarchar(100),
    Gender nvarchar(50),
    Image longblob,
	Birth nvarchar(50),
    Email nvarchar(50),
    Phone nvarchar(50),
    Address nvarchar(200),
    Account_id bigint
);
alter table USER add constraint ACCOUNTID_TO_USER_FK foreign key (Account_id) references ACCOUNT(Id);

CREATE TABLE CATEGORY(
	Id bigint PRIMARY KEY,
    Category_name nvarchar(100)
);

CREATE TABLE BRAND(
	Id bigint PRIMARY KEY,
    Brand_name nvarchar(100),
    Category_id bigint
);
alter table BRAND add constraint CATEGORYID_TO_BRAND_FK foreign key (Category_id) references CATEGORY(Id);

CREATE TABLE PRODUCT(
	Id bigint PRIMARY KEY,
    Product_name nvarchar(100),
    Product_description nvarchar(5000),
    Product_Image longblob,						-- Hình ảnh
    Quantity int,
    Price bigint,
    Guarantee int,
    Brand_id bigint
);
alter table PRODUCT add constraint BRANDID_TO_PRODUCT_FK foreign key (Brand_id) references BRAND(Id);

CREATE TABLE RATING(
	Category_id bigint,
    Product_id bigint,
    Brand_id bigint,
    Point int, -- Đánh giá 1 -> 5 sao
    Comment nvarchar(5000),
    PRIMARY KEY (Category_id, Product_id, Brand_id)
);
alter table RATING add constraint CATEGORYID_TO_RATING_FK foreign key (Category_id) references CATEGORY(Id);
alter table RATING add constraint PRODUCTID_TO_RATING_FK foreign key (Product_id) references PRODUCT(Id);
alter table RATING add constraint BRANDID_TO_RATING_FK foreign key (Brand_id) references BRAND(Id);

CREATE TABLE CART(
	Category_id bigint,
    Product_id bigint,
    Brand_id bigint,
    User_id bigint,
    PRIMARY KEY (Category_id, Product_id, Brand_id, User_id)
);
alter table CART add constraint CATEGORYID_TO_CART_FK foreign key (Category_id) references CATEGORY(Id);
alter table CART add constraint PRODUCTID_TO_CART_FK foreign key (Product_id) references PRODUCT(Id);
alter table CART add constraint BRANDID_TO_CART_FK foreign key (Brand_id) references BRAND(Id);
alter table CART add constraint USERID_TO_CART_FK foreign key (User_id) references USER(Id);

CREATE TABLE PAYMENT(
	Id bigint PRIMARY KEY,
    Payment_method nvarchar(100)		-- Tận nơi hoặc chuyển khoản
);
INSERT INTO PAYMENT VALUES(1, 'Giao Hang Tan Noi');
INSERT INTO PAYMENT VALUES(2, 'Chuyen Khoan');

CREATE TABLE ORDERS(
	Id bigint PRIMARY KEY,
	Category_id bigint,
    Product_id bigint,
    Brand_id bigint,
    User_id bigint,
    Payment_id bigint,
    Date nvarchar(50),					-- Ngày đặt hàng
    Quantity int, 						-- Cái này sẽ trừ vào Quantity ở Product
    Address nvarchar(200),
    Status bit							-- 0 là chưa, 1 là rồi (thanh toán)
);
alter table ORDERS add constraint CATEGORYID_TO_ORDERS_FK foreign key (Category_id) references CATEGORY(Id);
alter table ORDERS add constraint PRODUCTID_TO_ORDERS_FK foreign key (Product_id) references PRODUCT(Id);
alter table ORDERS add constraint BRANDID_TO_ORDERS_FK foreign key (Brand_id) references BRAND(Id);
alter table ORDERS add constraint USERID_TO_ORDERS_FK foreign key (User_id) references USER(Id);
alter table ORDERS add constraint PAYMENTID_TO_ORDERS_FK foreign key (Payment_id) references PAYMENT(Id);

CREATE TABLE ORDER_DETAIL(
	Id bigint PRIMARY KEY,
    Order_id bigint,
    Product_id bigint,
    Quantity int,
    Price Long,
    Amount Long
);
alter table ORDER_DETAIL add constraint PRODUCTID_TO_ORDER_DETAIL_FK foreign key (Product_id) references PRODUCT(Id);
alter table ORDER_DETAIL add constraint ORDERID_TO_ORDER_DETAIL_FK foreign key (Order_id) references ORDERS(Id);