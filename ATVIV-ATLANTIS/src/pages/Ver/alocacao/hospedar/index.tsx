import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import '../styles.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';
import { FcHome } from "react-icons/fc";

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    titular: boolean;
}

function Alocar() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
    }, []);

    const clientesTitulares = clientes.filter(cliente => cliente.titular);

    function handleSubmit(id: string) {
        localStorage.setItem("id_cliente", id);
        window.location.href = '/amodacoes_disponiveis'
    }

    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className='text'>
                    <h1 className="titles"> <strong> Hospedar </strong> </h1>
                </div>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead  className="titles-table">
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Hospedar</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                <td>Carla Noronha</td>
                                <td>987.654.321-00</td>   
                                    <td>
                                        <Button
                                        className="cps"
                                        id="transparente"
                                        onClick={() => handleSubmit("1")}
                                        >
                                            <FcHome color='black' size={28}/>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                <td>Luiza Teles</td>
                                <td>534.726.374-94</td>   
                                    <td>
                                        <Button
                                        className="cps"
                                        id="transparente"
                                        onClick={() => handleSubmit("1")}
                                        >
                                            <FcHome color='black' size={28}/>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Teresinha Antunes</td>
                                    <td>574.256.378-11</td>  
                                    <td>
                                        <Button
                                        className="cps"
                                        id="transparente"
                                        onClick={() => handleSubmit("1")}
                                        >
                                            <FcHome color='black' size={28}/>
                                        </Button>
                                    </td>
                                </tr>
                                
                
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Alocar;
