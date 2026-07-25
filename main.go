package main

import (
	"YAMW/internal/database"
	"YAMW/internal/handlers"
	"YAMW/internal/services"
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	Subsonic := database.NewSubsonic()

	hpService := services.NewHPService(Subsonic)
	health := handlers.NewHealth(hpService)

	listServ := services.NewListServ(Subsonic)
	list := handlers.NewList(listServ)

	streamServ := services.NewStreamServ()
	stream := handlers.NewStream(streamServ)

	lrclib := database.NewLrclib()
	lyricsServ := services.NewLyricsServ(lrclib)
	lyrics := handlers.NewLyrics(lyricsServ)

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "YAMW",
		DisableResize:    true,
		Width:            306,
		Height:           384,
		MaxWidth:         306,
		MaxHeight:        384,
		Frameless:        true,
		AlwaysOnTop:      true,
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0},
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		OnStartup:  app.startup,
		OnShutdown: app.shutdown,
		Bind: []interface{}{
			app,
			health,
			list,
			stream,
			lyrics,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
