create database if not exists forestgo;
use forestgo;

SET foreign_key_checks = 0;

drop table if exists userinfo;
create table `userinfo` (
   `id` int NOT NULL AUTO_INCREMENT,
    `password` varchar(100) NOT NULL,
    `last_login` timestamp default current_timestamp,
    `is_superuser` boolean,
    `username` varchar(20),
    `first_name` varchar(10),
    `last_name` varchar(10),
    `email` varchar(100),
    `is_staff` boolean,
    `is_active` boolean,
    `date_joined` timestamp default current_timestamp,
    `groups` varchar(100),
    `user_permissions` varchar(100),
    
    PRIMARY KEY (`id`),
    UNIQUE KEY (`email`),
    UNIQUE KEY (`username`)
);

drop table if exists forestbook;
create table `forestbook` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(20) NOT NULL,
    `fullname` varchar(100),
    `species` varchar(20),
    `description` varchar(1000),
    `type` int,
    `habitat` varchar(20),
    `season` int,
    `img` varchar(100),
    
    PRIMARY KEY (`id`),
    UNIQUE KEY (`name`),
    UNIQUE KEY (`fullname`)
);

drop table if exists userbook;
create table `userbook` (
	`id` int NOT NULL AUTO_INCREMENT,
	`userinfo_id` int NOT NULL,
    `forestbook_id` int NOT NULL,
    `date` timestamp default current_timestamp,
    `img` varchar(100),
    
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userinfo_id`) REFERENCES `userinfo` (`id`) ON DELETE CASCADE,
    FOREIGN KEY (`forestbook_id`) REFERENCES `forestbook` (`id`) ON DELETE CASCADE
);

drop table if exists challenge;
create table `challenge` (
   `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(100) NOT NULL,
    `description` varchar(1000),
    `type` int,
    `icon_img` varchar(100),

    PRIMARY KEY (`id`),
    UNIQUE KEY (`title`)
);

drop table if exists userchallenge;
create table `userchallenge` (
   `id` int NOT NULL AUTO_INCREMENT,
    `userinfo_id` int NOT NULL,
    `challenge_id` int NOT NULL,
    `date` timestamp default current_timestamp,

    PRIMARY KEY (`id`),
    FOREIGN KEY (`userinfo_id`) REFERENCES `userinfo` (`id`)  ON DELETE CASCADE,
    FOREIGN KEY (`challenge_id`) REFERENCES `challenge` (`id`)  ON DELETE CASCADE
);