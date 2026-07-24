package handlers

import (
	"YAMW/internal/dto"
	"YAMW/internal/services"
)

type Lyrics struct {
	LyricsServ *services.LyricsServ
}

func NewLyrics(lyricsServ *services.LyricsServ) *Lyrics{
	return &Lyrics{LyricsServ: lyricsServ}
}

func (l *Lyrics) GetLyrics(artist, title string) (dto.Lyrics, error){
	return l.LyricsServ.LrclibUrl(artist, title)
}