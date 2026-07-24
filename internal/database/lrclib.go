package database

import (
	"YAMW/internal/dto"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Lrclib struct{}

func NewLrclib() *Lrclib {
	return &Lrclib{}
}

func (l *Lrclib) FetchLRCLIB(url string) (dto.Lyrics, error){
	var data dto.Lyrics
	
	req, err := http.NewRequest("GET", url, nil); if err != nil{
		return data, err
	}

	req.Header.Set("User-Agent", "YAMW V1.1.1 (https://github.com/Arjuna-Ragil/YAMW)")

	client := &http.Client{}
	res, err := client.Do(req); if err != nil{
		return data, err
	}
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)

	err = json.Unmarshal(body, &data); if err != nil{
		return data, err
	}

	fmt.Println(data)

	return data, nil
}