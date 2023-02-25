'use strict'

$(document).ready(function(){

    /*este slider es un json, ojo */
    
    
    if(window.location.href.indexOf('index')>-1){
        $('.bxslider').bxSlider({
            mode:'fade',
            captions: true,
            slideWidth:1200,
            pager: true
        });
    }
    
    
    


    /* parte de los posts, un array de varios json */    


    if(window.location.href.indexOf('index')>-1){
        var posts = [
            {   title: 'prueba titulo 1',
                date: 'Publicado el dia '+moment().format("DD")+" de "+ moment().format("MMMM") +" de "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dictum mi. Quisque consequat ligula id nisl luctus, eu elementum sem pretium. Nullam rhoncus libero quam, tincidunt fermentum turpis luctus sit amet. Nulla sem ex, faucibus eget dolor id, semper egestas libero. Vestibulum non est vitae elit volutpat efficitur at interdum risus. Nunc volutpat ipsum quam, sed ornare velit feugiat et. Proin vel nulla aliquet nulla consequat malesuada. In sed arcu id nisi pretium luctus a eget lectus. Aenean consequat eu eros vitae ullamcorper. Donec at gravida lectus. Donec fermentum id tellus quis dignissim. Morbi molestie eros dui, nec mattis lacus mattis vel. Phasellus elementum placerat aliquam. Mauris sit amet nisl mauris.'
        },
            {    title: 'prueba titulo 2',
                date: 'Publicado el dia '+moment().format("DD")+" de "+ moment().format("MMMM") +" de "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dictum mi. Quisque consequat ligula id nisl luctus, eu elementum sem pretium. Nullam rhoncus libero quam, tincidunt fermentum turpis luctus sit amet. Nulla sem ex, faucibus eget dolor id, semper egestas libero. Vestibulum non est vitae elit volutpat efficitur at interdum risus. Nunc volutpat ipsum quam, sed ornare velit feugiat et. Proin vel nulla aliquet nulla consequat malesuada. In sed arcu id nisi pretium luctus a eget lectus. Aenean consequat eu eros vitae ullamcorper. Donec at gravida lectus. Donec fermentum id tellus quis dignissim. Morbi molestie eros dui, nec mattis lacus mattis vel. Phasellus elementum placerat aliquam. Mauris sit amet nisl mauris.'
       },
            {    title: 'prueba titulo 3',
                date: 'Publicado el dia '+moment().format("DD")+" de "+ moment().format("MMMM") +" de "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dictum mi. Quisque consequat ligula id nisl luctus, eu elementum sem pretium. Nullam rhoncus libero quam, tincidunt fermentum turpis luctus sit amet. Nulla sem ex, faucibus eget dolor id, semper egestas libero. Vestibulum non est vitae elit volutpat efficitur at interdum risus. Nunc volutpat ipsum quam, sed ornare velit feugiat et. Proin vel nulla aliquet nulla consequat malesuada. In sed arcu id nisi pretium luctus a eget lectus. Aenean consequat eu eros vitae ullamcorper. Donec at gravida lectus. Donec fermentum id tellus quis dignissim. Morbi molestie eros dui, nec mattis lacus mattis vel. Phasellus elementum placerat aliquam. Mauris sit amet nisl mauris.'
       },
            {    title: 'prueba titulo 4',
                date: 'Publicado el dia '+moment().format("DD")+" de "+ moment().format("MMMM") +" de "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dictum mi. Quisque consequat ligula id nisl luctus, eu elementum sem pretium. Nullam rhoncus libero quam, tincidunt fermentum turpis luctus sit amet. Nulla sem ex, faucibus eget dolor id, semper egestas libero. Vestibulum non est vitae elit volutpat efficitur at interdum risus. Nunc volutpat ipsum quam, sed ornare velit feugiat et. Proin vel nulla aliquet nulla consequat malesuada. In sed arcu id nisi pretium luctus a eget lectus. Aenean consequat eu eros vitae ullamcorper. Donec at gravida lectus. Donec fermentum id tellus quis dignissim. Morbi molestie eros dui, nec mattis lacus mattis vel. Phasellus elementum placerat aliquam. Mauris sit amet nisl mauris.'
       },
            {    title: 'prueba titulo 5',
                date: 'Publicado el dia '+moment().format("DD")+" de "+ moment().format("MMMM") +" de "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dictum mi. Quisque consequat ligula id nisl luctus, eu elementum sem pretium. Nullam rhoncus libero quam, tincidunt fermentum turpis luctus sit amet. Nulla sem ex, faucibus eget dolor id, semper egestas libero. Vestibulum non est vitae elit volutpat efficitur at interdum risus. Nunc volutpat ipsum quam, sed ornare velit feugiat et. Proin vel nulla aliquet nulla consequat malesuada. In sed arcu id nisi pretium luctus a eget lectus. Aenean consequat eu eros vitae ullamcorper. Donec at gravida lectus. Donec fermentum id tellus quis dignissim. Morbi molestie eros dui, nec mattis lacus mattis vel. Phasellus elementum placerat aliquam. Mauris sit amet nisl mauris.'
       }
        ];
        
    
        posts.forEach((item, index) =>{
            var post =  `
            <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
            `
            $("#posts").append(post);
        })
    }


    

    //selector de tema

    var tema = $("#theme");

    var botonTemaVerde = $("#a-verde");
    var botonTemaRojo = $("#a-rojo");
    var botonTemaAzul = $("#a-azul");

    botonTemaVerde.click(function(){
        tema.attr("href","css/green.css");
    });
    botonTemaRojo.click(function(){
        tema.attr("href","css/red.css");
    });
    botonTemaAzul.click(function(){
        tema.attr("href","css/blue.css");
    });


    //scroll de la pagina web hacia el inicio(arriba)

    var botonScrollSubir = $(".subir");
    botonScrollSubir.click(function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000
        
        );

        return false;
    });


    //parte del login falso y usar localStorage para hacerlo

    $("#login form").submit(function(){
        var UsuarioFalso = $("#form_name").val();

        localStorage.setItem("form_name", UsuarioFalso);


    });

    var nombreUsuarioFalso = localStorage.getItem("form_name");
    if(nombreUsuarioFalso != null && nombreUsuarioFalso != undefined){
        var about_parrafo =$("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+nombreUsuarioFalso+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    };

if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
};

if(window.location.href.indexOf('reloj') > -1){
    
    setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $("#reloj").html(reloj);
    }, 1000);
    
};

    /*validaciones conm el plugin de validacion y jquery*/

if(window.location.href.indexOf('contacto') > -1){
    
    $("form input[name='fecha_nac']").datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
    $.validate({
        lang:'es',
        errorMessagePosition:'top',
        scrollToTopOnError: true
    });
}



    


})






