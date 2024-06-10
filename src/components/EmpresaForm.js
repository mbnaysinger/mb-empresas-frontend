import React, { useState } from 'react';
import axios from 'axios';

const EmpresaForm = () => {
    const [empresa, setEmpresa] = useState({
        cnpj: '',
        razao_social: '',
        cnae_principal: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpresa({ ...empresa, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/empresas', empresa)
            .then(response => {
                console.log(response.data);
                // Limpar o formulário ou exibir uma mensagem de sucesso
            })
            .catch(error => {
                console.error(error);
                // Exibir uma mensagem de erro
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>CNPJ:</label>
                <input type="text" name="cnpj" value={empresa.cnpj} onChange={handleChange} required />
            </div>
            <div>
                <label>Razão Social:</label>
                <input type="text" name="razao_social" value={empresa.razao_social} onChange={handleChange} required />
            </div>
            <div>
                <label>CNAE Principal:</label>
                <input type="text" name="cnae_principal" value={empresa.cnae_principal} onChange={handleChange} required />
            </div>
            <div>
                <label>CEP:</label>
                <input type="text" name="cep" value={empresa.cep} onChange={handleChange} required />
            </div>
            <div>
                <label>Logradouro:</label>
                <input type="text" name="logradouro" value={empresa.logradouro} onChange={handleChange} required />
            </div>
            <div>
                <label>Número:</label>
                <input type="text" name="numero" value={empresa.numero} onChange={handleChange} required />
            </div>
            <div>
                <label>Complemento:</label>
                <input type="text" name="complemento" value={empresa.complemento} onChange={handleChange} />
            </div>
            <div>
                <label>Bairro:</label>
                <input type="text" name="bairro" value={empresa.bairro} onChange={handleChange} required />
            </div>
            <div>
                <label>Cidade:</label>
                <input type="text" name="cidade" value={empresa.cidade} onChange={handleChange} required />
            </div>
            <div>
                <label>Estado:</label>
                <input type="text" name="estado" value={empresa.estado} onChange={handleChange} required />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default EmpresaForm;