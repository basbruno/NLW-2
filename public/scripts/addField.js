document.querySelector("#add-time")
.addEventListener('click',cloneField)

//quando clicar num botão
functioncloneField()
{
    console.log('Cheguei aqui')

//Duplicar os campos, que campos?



// executar uma ação

}


function cloneField(){


//duplicar os campos? que campos?
 const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true) //Boolean

//limpar os campos
const fields = newFieldContainer.querySelectorAll('input')

fields.forEach(function(field)  {


    field.value =""
    
});

//colocar na pagina: onde?
document.querySelector('#schedule-item').appendChild(newFieldContainer)
}