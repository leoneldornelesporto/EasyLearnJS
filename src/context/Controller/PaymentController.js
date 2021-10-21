import {create} from 'apisauce';

const api = create({
    baseURL: 'https://easylearn-app.herokuapp.com',
    headers: { Accept: 'application/json' },
})

const api_pagseguro = create({
    baseURL: 'https://sandbox.api.pagseguro.com',
    headers: { Accept: 'application/json' },
})


export async function findPaymentByUuidCursoAndIdAluno(uuidCurso,idAluno,authorization) {
    return (await api.get('v1/protectedA/payment/'+uuidCurso+'/'+idAluno,null,{headers:{Authorization:authorization}})).data;
}

export async function savePayment(idPayment,status,uuidCurso,idAluno,authorization) {
    return (await api.post('v1/protectedA/payment',{idPayment:idPayment,status:status,uuidCurso:uuidCurso,idAluno:idAluno},{headers:{Authorization:authorization}})).data;
}

export async function savePaymentPagSeguro(description,value,number,exp_month,exp_year,security_code,name) {
    return (await api_pagseguro.post('/charges',{ "reference_id": "ex-00001", "description": description, "amount": { "value": value, "currency": "BRL" }, "payment_method": { "type": "CREDIT_CARD", "installments": 1, "capture": true, "card": { "number": number, "exp_month": exp_month, "exp_year": exp_year, "security_code": security_code, "holder": { "name": name } } } },{headers:{Authorization:"6EB4D584E25A4A2E8891582FEF0EA53A","content-type":"application/json","x-api-version":4.0}})).data;
}
