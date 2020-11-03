import api from '../api';
import React, { useState, useEffect } from 'react'

function Clientes() {
    const [clientes, setClientes] = useState([])
    const [filtro, setFiltro] = useState(null)

    useEffect(async () => {
        const resposta = await api.get('/customers/')
        setClientes(resposta.data.customers)

    }, [])

    function handleChange(evento) {
        setFiltro(evento.target.value)
    }

    return <section>
        <h1>Clientes</h1>

        <div>
            <label htmlFor="fitro">Filtro:  </label>
            <input onchange={handleChange} type="text" name="filtro" id="filtro" />
        </div>

        {clientes.lenght > 0 ? (
            <div>
                {clientes.map((cliente) => (
                    <p key={cliente.customers_url}>Nome: {cliente.firstname} {cliente.lastname}</p>
                ))}
            </div>
        ) : (
                <p>Carregando clientes...</p>
            )}

    </section>

}

export default Clientes