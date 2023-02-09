const { response } = require('express');
var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');

/* GET home page. */
router.get('/', function (req, res, next) {

  (async () => {
    //const browser = await puppeteer.launch();
    //Opcion ver acciones
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
  
    await page.goto('https://www.amazon.com.mx/');
    
    //captura pantalla
    await page.screenshot({path: './public/images/test.jpg'});
/* 
    //Escribir en input
    await page.type('#twotabsearchtextbox', 'ryzen 9 7600');
    await page.screenshot({path: 'test2.jpg'});

    //Click en elemento
    await page.click('#nav-search-submit-button');

    //Hacer que la pagina espere un selector especifico
    await page.waitForSelector('[data-csa-c-type=item]')
    await page.screenshot({path: 'test3.jpg'});

    //Agregamos tiempo
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'test4.jpg'});

    //Contar elementos
    let procesadores = [];
    const lista = await page.evaluate(()=>{
      const elements = document.querySelectorAll('[data-csa-c-type=item] a');

      const elementos = [];
      for(let elem of elements){
        elementos.push(elem.href);
      }
      return elementos;
    });

    console.log(lista.length);

    for(let link of lista){
      await page.goto(link);
      await page.waitForSelector('#productTitle');

      const procesador = await page.evaluate(()=>{
        const descripcion = {};
        descripcion.datos = document.querySelector('#productTitle').innerText;
        return descripcion;
      });
      procesadores.push(procesador);
      console.log(procesadores);
    }
    
    console.log(procesadores);
 */
    /* array.forEach(element => {
      
    }); */
    res.render('index',{title: "test.jpg"})
    await browser.close();
  })();
});


module.exports = router;
