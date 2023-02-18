package main

import "github.com/gin-gonic/gin"

func CatRouter(router gin.IRouter) {

	router.POST("/api/cat/add", AddCat)

	router.GET("/api/cats", GetAllCats)

	router.GET("/api/cat/:id", GetCat)

	router.DELETE("/api/cat/:id", DeleteCat)

	router.PUT("/api/cat/:id", EditCat)

}
