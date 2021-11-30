



var selected = 1;

var menu = false;



var item1 = document.getElementById("item1");

var item2 = document.getElementById("item2");

var item3 = document.getElementById("item3");



var content1 = document.getElementById("content1");

var content2 = document.getElementById("content2");

var content3 = document.getElementById('content3');



var body = document.getElementById('body');





document.getElementById("btnMenu").addEventListener('click',()=>{

 

    var Nav = document.getElementById("menuNav");

    var M =  document.getElementById("menu");



    if(!menu){

   

        M.classList.add("full");

        Nav.style.display="flex";

        Nav.classList.remove("animate__fadeOutLeft");

        Nav.classList.add("animate__fadeInLeft");

        



     menu = true;



    }

    else{

        

        Nav.classList.remove("animate__fadeInLeft");

        Nav.classList.add("animate__fadeOutLeft");

        

        M.classList.remove("full");

     

        setTimeout(()=>{Nav.style.display='none';},300);

       menu = false;

   



        

     

       

    }





  

});

document.getElementById("right").addEventListener('click',function(){



    selected += 1

    if(selected != 4 ){

         window.scroll({

             top:0,

             left:0,

             behavior:'smooth'



         });

        items();

       }

       else{

           selected=3;

       }

    

  



});


document.getElementById('BtnHelp').addEventListener('click',()=>{selected=2; items();})

document.getElementById('inicio').addEventListener('click',()=>{

    selected = 1;
    items();
});



document.getElementById("left").addEventListener('click',function(){

    selected -= 1

   if(selected !=0){

   window.scroll({

       top:0,

       left:0,

       behavior:'smooth'

   });

    items();

     }

     else{

         selected=1;

     }

    



});







function items(){

    if(selected==1){



        item1.classList.remove("unselected");

       item1.classList.add("activo");

        item2.classList.remove("activo");

        item3.classList.remove("activo");

        item2.classList.add("unselected");

        item3.classList.add("unselected")





        content2.classList.add("animate__fadeOutLeftBig");

        content3.style.display="none";

          

        content1.classList.remove("animate__fadeOutLeftBig")

        content1.style.display="flex";

       content1.classList.add("animate__fadeInLeftBig");

       content2.style.display="none";

      document.getElementById('space').style.display='block';

  

    }

  

    if(selected==2){

        item1.classList.remove("activo");

        item3.classList.remove("activo");

        item1.classList.add("unselected");

        item3.classList.add("unselected");

        document.getElementById('space').style.display="none";

        item2.classList.remove("unselected");

        item2.classList.add("activo");

        



       

      

        content1.classList.add("animate__fadeOutLeftBig");

      



       

        content2.classList.remove("animate__fadeOutLeftBig");

        content2.style.display="flex";

        content2.classList.add("animate__fadeInLeftBig");



        content3.style.display="none";

        content1.style.display="none";

    }

  

    if(selected==3){

        item1.classList.add("unselected");

        item2.classList.add("unselected");

        item1.classList.remove("activo");

        item2.classList.remove("activo");

  

        item3.classList.remove("unselected");

        item3.classList.add("activo");



        content2.classList.add("animate__fadeOutLeftBig");

         content3.style.display="flex";

        content3.classList.add("animate__fadeInLeftBig");

       

        

        content2.style.display="none";

    }

}