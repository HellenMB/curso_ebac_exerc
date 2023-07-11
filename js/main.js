$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000.00');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            telefone: {
                required:true
            },
            cpf:{
                required: true
            },
            cep: {
                required: true
            },
            endereco:{
                required: true
            }
        },

        messages:{
            nome: 'Por favor, insira seu nome.',

            email: 'Por favor, insira seu e-mail.',

            telefone: 'Por favor, insira seu Celular.',
            
            cpf: 'Por favor, insira seu CPF.',

            cep: 'Por favor, insira seu CEP.',

            endereco: 'Por favor, insira seu endereço.'
            
        },

    })
})