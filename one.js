// Criar página HTML para mostrar os dados que estão no JavaScript

function printDataJS(){
    //Pelo ID - Identificador
    document.getElementById("one").innerHTML = "Número um!";

    //Pelo Name - Nome
    document.getElementsByName('two')[0].innerHTML = 'Número dois!';

    //Pela Class - Classe
    document.getElementsByClassName('three')[0].innerHTML = 'Número três!';
}

printDataJS()

/*

The getElementsByName() method:
    - returns a collection of elements with a specified name.
    - returns a live NodeList.

NodeList
    - Is an array-like collection (list) of nodes.
    - The nodes in the list can be accessed by index. The index starts at 0.
    - The length Poperty returns the number of nodes in the list.

*/