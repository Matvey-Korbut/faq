package main

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type Cat struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	InStrip bool   `json:"is_strip"`
	Color   string `json:"color"`
}

func main() {
	var cats []Cat

	r := gin.Default()

	r.POST("/api/cat/add", func(c *gin.Context) {

		var cat Cat

		if err := c.BindJSON(&cat); err != nil {
			return
		}
		cat.ID = uuid.NewString()
		cats = append(cats, cat)

		c.JSON(200, cat)
	})

	r.GET("/api/cats", func(c *gin.Context) {
		c.JSON(200, cats)
	})

	r.GET("/api/cat/:id", func(c *gin.Context) {
		id := c.Param("id")

		var cat Cat

		for _, ct := range cats {
			if ct.ID == id {
				cat = ct
			}
		}

		c.JSON(200, cat)
	})

	r.DELETE("/api/cat/:id", func(c *gin.Context) {
		id := c.Param("id")

		var index int
		var cat Cat

		for i, ct := range cats {
			if ct.ID == id {
				index = i
				cat = ct
			}
		}

		cats = append(cats[:index], cats[index+1:]...)

		c.JSON(200, cat)
	})

	r.PUT("/api/cat/:id", func(c *gin.Context) {
		var cat Cat

		id := c.Param("id")

		if err := c.BindJSON(&cat); err != nil {
			return
		}

		var index int

		for i, ct := range cats {
			if ct.ID == id {
				index = i
			}
		}

		cats[index].Name = cat.Name
		cats[index].InStrip = cat.InStrip
		cats[index].Color = cat.Color

	})

	r.Run("0.0.0.0:8888")
}
