package main

import (
	"bufio"
	"bytes"
	"fmt"
	"io/ioutil"
	"path/filepath"
	"testing"
)

func TestToJSON(t *testing.T) {
	var b bytes.Buffer
	w := bufio.NewWriter(&b)
	err := toJSON(w)
	if err != nil {
		t.Fatalf("failed writing json: %s", err)
	}
	w.Flush()
	g, err := ioutil.ReadFile(filepath.Join("testdata", t.Name()+".golden"))
	if err != nil {
		t.Fatalf("failed reading .golden: %s", err)
	}

	fmt.Printf("Contenido del archivo: %s", g)
	fmt.Println("")
	fmt.Printf("Contenido de la salida: %v", b.String())
	fmt.Println("")
	fmt.Printf("Contenido del archivo: %v", g)
	fmt.Println("")
	fmt.Printf("Contenido de la salida: %v", b.Bytes())
	fmt.Println("")

	if !bytes.Equal(b.Bytes(), g) {
		t.Errorf("Writiten json does not match %v.golden file", t.Name())
	}
}
