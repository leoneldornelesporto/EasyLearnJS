import React, {createContext, useState} from 'react';
import {getAuthorization} from "./AuthHandler";
import {findPaymentByUuidCursoAndIdAluno, savePayment, savePaymentPagSeguro} from "./Controller/PaymentController";

export const PaymentContext = createContext({});

export const PaymentProvider = ({children}) => {

    const [resposta, setResposta] = useState(null);
    const [respostaPagSeguro, setPagSeguro] = useState(null);
    const [pagamentos, setPagamentos] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});

    const salvarPagamento = async (idPayment,status,uuidCurso,idAluno) => {
        try {
            const response = await savePayment(idPayment,status,uuidCurso,idAluno,getAuthorization());
            setResposta(response);
            console.log(response)
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const salvarPagamentoPagSeguro = async (description,value,number,exp_month,exp_year,security_code,name) => {
        try {
            const response = await savePaymentPagSeguro(description,value,number,exp_month,exp_year,security_code,name);
            setPagSeguro(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    const retornaPagamentoPeloUuidCursoEIdAluno = async (uuidCurso,idAluno) => {
        try {
            const response = await findPaymentByUuidCursoAndIdAluno(uuidCurso,idAluno,getAuthorization());
            setPagamentos(response);
        } catch (response) {
            setErrorMessage(response);
            console.log('Erro ao Retornar Cursos por Uuid.');
            console.log(response);
        }
    };

    return (
        <PaymentContext.Provider
            value={{
                resposta,
                pagamentos,
                respostaPagSeguro,
                errorMessage,
                setErrorMessage,
                salvarPagamento,
                retornaPagamentoPeloUuidCursoEIdAluno,
                salvarPagamentoPagSeguro,
            }}>
            {children}
        </PaymentContext.Provider>
    );
};