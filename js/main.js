
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
           $("#logradouro").html(response.logradouro);
           $("#uf").html(response.uf);
           $("#localidade").html(response.localidade);
           $("#bairro").html(response.bairro);
           $("#titulo_cep").html("CEP " + response.cep);
           $(".cep").show();
           $(".barra-progresso").hide();
           $(".contacts_list").show();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            // document.getElementById("bairo").innerHTML = response.bairro;
            // document.getElementById("localidade").innerHTML = response.localidade;
            // document.getElementById("ur").innerHTML = response.uf;
        } 
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
    $(".contacts_list").hide();
}); 