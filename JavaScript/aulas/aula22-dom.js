function show(){
   const contactList = document.getElementById('contact-List') // Seleciona o elemento que tem aquele id
   console.log(contactList)

   const listElements = document.getElementsByTagName('li') // mostra todos as tags que são desse tipo 'li'
   console.log(listElements)

   const contactInputs = document.getElementsByClassName('contact-input') // mostra tudo que tem naquele objeto que tem o nome dessa classe
   console.log(contactInputs)

   const contacts = document.querySelectorAll('#contact-list > li > label') // mostra todos os elementos que fazem parte daquele objeto
   console.log(contacts)

   const contact1 = document.getElementsByName('contact1') // mostra o elemento que tem esse nome
   console.log(contact1)

   const firstContact = document.querySelector('#contact-list > li > label') // mostra o primeiro elemento que tiver essa referência, não todos.
   
}