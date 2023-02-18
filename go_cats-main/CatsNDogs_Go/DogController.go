package main

import (
	"github.com/gin-gonic/gin"
	"log"
)

func GetAllDogs(c *gin.Context) {
	c.JSON(200, FindAllDogs())
}

func AddDog(c *gin.Context) {
	var dog Dog

	if err := c.BindJSON(&dog); err != nil {
		return
	}

	c.JSON(200, CreateDog(dog))
}

func GetDog(c *gin.Context) {
	id := c.Param("id")

	c.JSON(200, FindDogById(id))
}

func DeleteDog(c *gin.Context) {
	id := c.Param("id")

	c.JSON(200, DeleteDogById(id))
}

func EditDog(c *gin.Context) {
	id := c.Param("id")

	var dog Dog
	if err := c.BindJSON(&dog); err != nil {
		return
	}

	dog.ID = id

	log.Println(dog)

	c.JSON(200, UpdateDog(dog))
}
