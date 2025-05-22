package main

import (
	"fmt"
	"html/template"
	"net/http"
)

// Struct untuk data portofolio
type Portfolio struct {
	Title       string
	Name        string
	Description string
	Projects    []Project
}

type Project struct {
	Title       string
	Description string
	Link        string
}

func main() {
 app := fiber.New()

 app.Get("/", func(c *fiber.Ctx) error {
  return c.SendString("Hello, World!")
 })

 app.Listen(":3000")
}