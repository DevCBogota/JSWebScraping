[![CircleCI](https://circleci.com/gh/gerlis18/JSWebScraping/tree/master.svg?style=svg)](https://circleci.com/gh/gerlis18/JSWebScraping/tree/master)


# Un ejemplo de web scraping usando JavaScript (Node)

## ¿Qué es esto?

Unos cuántos ejemplos de cómo usar [Puppeteer](https://developers.google.com/web/tools/puppeteer/) para hacer [scraping](https://en.wikipedia.org/wiki/Web_scraping) de aplicaciones web.
Esto nos permite crear APIs donde no las hay, tomando la información de las páginas web.
Se usa http://books.toscrape.com/, una página inventada para practicar.

## Uso

### Instalación de dependencias

`git clone https://github.com/DevCBogota/JSWebScraping.git`
`cd JSWebScraping`
`npm i`

### Ejecución

Existen 3 ejemplos:

- [`basico`](./basico/README.md):  
    - Hace click en un botón, muestra el resultado.  
    - `npm run basico`
- [`ciclo`](./ciclo/README.md):   
    - Selecciona todos los elementos que coinciden con el parámetro, muestra el resultado.
    - `npm run ciclo`  
- [`screenshot`](./screenshot/README.md): 
    - Toma un pantallazo de la página.
    - `npm run screenshot`


### Presentación relacionada

> https://drive.google.com/open?id=1ZKqmJyyE1_EA9BCR6HLMPv9yPefu90aGggdpYGJR6gI

