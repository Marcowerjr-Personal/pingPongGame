drop database if exists ping_pong_game;
create database ping_pong_game;
use ping_pong_game;

create table game_history
(
    id                 int auto_increment
        primary key,
    first_player_name  varchar(255) not null,
    second_player_name varchar(255) not null,
    first_player_wins  int          not null,
    second_player_wins int          not null,
    winner_player      varchar(255) not null,
    win_difference     int          not null
);