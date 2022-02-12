export default function Test(props) {
    console.log(props);
    return (
        <div>
            Teste
        </div>
    )
}

// Exemplo de utilizacao de props
/* <Test 
number={10} //numero 
string="Teste" //string
visible //boolean (utilizar visible para declarar um)
data={{a: 1, b: 2}}  //objeto (para declarar um abrir das chaves)
onClick={() =>{
console.log('click'); //funcao (costuma usar on na frente de funcoes)
}}
/> */
