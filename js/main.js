const elementoLista = document.querySelector('ul2')
const elementoTrf = document.querySelector('.trf')
const elementoDti = document.querySelector('.dtinicio')
const elementoHrt = document.querySelector('.hrtermino')
const elementoDtt = document.querySelector('.dttermino')
const elementoBotao = document.querySelector('.btn')


const tarefas = []

function mostraTarefas() {

    elementoLista.innerHTML = ''
    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li')

        const textoTarefa = document.createTextNode(tarefa)

        elementoTarefa.appendChild(textoTarefa)

        elementoLista.appendChild(elementoTarefa)
    };
};

mostraTarefas();

function addTarefas(){
    const textoTarefa = elementoTrf.value
    const textoDti = elementoDti.value
    const textoHrt = elementoHrt.value
    const textoDtt = elementoDtt.value
    tarefas.push(textoTarefa)
    tarefas.push(textoDti)
    tarefas.push(textoHrt)
    tarefas.push(textoDtt)
    

    mostraTarefas()
}



elementoBotao.setAttribute('onclick', 'addTarefas()')