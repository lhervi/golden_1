package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"os"
)

func toJSON(w io.Writer) error {
	return json.NewEncoder(w).Encode(&struct {
		Foo   string `json:"foo"`
		Bar   string `json:"bar"`
		Fruit string `json:"fruit"`
	}{
		"Foo",
		"Bar",
		"Fruit",
	})
}

func main() {
	var b bytes.Buffer
	w := bufio.NewWriter(&b)
	if err := toJSON(w); err != nil {
		fmt.Fprintf(os.Stderr, "error writing json: %s", err)
	}
	w.Flush()
	fmt.Print("\n\n")
	fmt.Println(b.String())
	fmt.Printf("%v", b.Bytes())
	fmt.Print("\n\n\n")
}
