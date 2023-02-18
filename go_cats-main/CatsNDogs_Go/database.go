package main

import "github.com/go-pg/pg/v10"

func PostgresConnect() *pg.DB {
	return pg.Connect(&pg.Options{
		User:     "postgres",
		Password: "ptpit",
		Addr:     "localhost:5432",
		Database: "Cats_2",
	})
}
