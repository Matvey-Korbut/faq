package main

import "github.com/gin-gonic/gin"

func DogRouter(router gin.IRouter) {

	router.POST("/api/dog/add", AddDog)

	router.GET("/api/dogs", GetAllDogs)

	router.GET("/api/dog/:id", GetDog)

	router.DELETE("/api/dog/:id", DeleteDog)

	router.PUT("/api/dog/:id", EditDog)

}
