//https://satellasoft.com/artigo/html/select-com-os-estados-brasileiros

function PreencherSelect(config){
			
    console.log("%c Fill select states", "color: #1E90FF;");
    var vetSiglas = new Array("ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to");
    
    var vetEstados = new Array("Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins");
    
    var Select = document.getElementById("slEstados");
    
    if(config.limparSelect){
        Select.innerHTML = "";
    }
    
    if(config.selecione){
        vetSiglas.unshift ("");
        vetEstados.unshift ("Selecione");
    }
    
    for(var i = 0; i < vetSiglas.length; i++){
        var Option = document.createElement("option");
        Option.value = vetSiglas[i];
        Option.innerHTML = vetEstados[i];
        
        Select.appendChild(Option);
        
        if(config.exibirConsole){
            console.log("%c "+ vetSiglas[i] + " - ", "color: #1E90FF;");
        }
    }
}

document.addEventListener("DOMContentLoaded", function(){
				
    var config = {
        "selecione" : true,
        "exibirConsole" : true,
        "limparSelect" : true
    };
    
    PreencherSelect(config);
}, false);