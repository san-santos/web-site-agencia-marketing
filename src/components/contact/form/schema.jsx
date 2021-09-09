import * as Yup from 'yup';

export default Yup.object().shape({
    
    name: Yup.string().min(2, 'O número mínimo de caracteres 2').max(70, 'O número máximo de caracteres 70').required('O nome é necessário'),
    email: Yup.string().email('seuemail@seuprovedor.com.br').required('O email é necessário'),
    whatsapp: Yup.string().length(14, 'Exemplo: 00 9 0000-0000').matches(/[0-9]+/gi, "Digite somente números").required('O número do celular é necessário'),
    select: Yup.string().required('Selecionar uma opção é necessário'),
    message: Yup.string().min(20, 'Mensagem mínimo de 20 caracteres').required('Escrever a mensagem é necessário'),
    check: Yup.string().required('A autorização é necessária'),

});