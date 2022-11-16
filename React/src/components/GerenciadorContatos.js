import { Profiler, useEffect, useState } from 'react';
import "./GerenciadorContatos.css";

import { Contatos } from './Contatos/Contatos';

export function GerenciadorContatos() {
    const [contatos, setContatos] = useState([])
    const [modalAdd, setModalAdd] = useState(false)
    const [qtdDadosAdd, setQtdDadosAdd] = useState(1)


    function adicionarContato() {
        let tempoInicio = new Date().getTime()
        let listaContatos = contatos
        for (let i = 0; i < qtdDadosAdd; i++) {
            listaContatos.push({
                id: listaContatos.length,
                nome: "Contato " + listaContatos.length,
                telefone: "Telefone " + listaContatos.length,
                email: "Email " + listaContatos.length
            })
        }
        setContatos(listaContatos)
        let tempoFim = new Date().getTime()
        // alert("Tempo de execução: " + (tempoFim - tempoInicio) + "ms")
        setModalAdd(false)
    }

    function performanceCallback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
        console.log("id: " + id)
        console.log("phase: " + phase)
        console.log("actualDuration: " + actualDuration)
        console.log("baseDuration: " + baseDuration)
        console.log("startTime: " + startTime)
        console.log("commitTime: " + commitTime)
        console.log("interactions: " + interactions)
    }

    return (
        <div>
            <div className='naveContatos'>
                <div className='headerContatos'>
                    <h1>Lista de Contatos</h1>
                    <div className='divBotoes'>
                        <button className='botao add' onClick={() => setModalAdd(true)}>Adicionar</button>
                        <button className='botao remover' onClick={() => setContatos([])}>Remover</button>
                        <button className='botao editar'>Editar</button>
                    </div>
                </div>
            </div>
            <div className='bodyCRUD'>


                <div className='Conteudo'>
                    <Profiler id="test" onRender={performanceCallback}>
                        <Contatos contatos={contatos} />
                    </Profiler>
                </div>
                {
                    modalAdd && (
                        <div className='modalBg'>
                            <div className='modal modalComprasAdd'>
                                <div className='modalFechar'><span onClick={() => setModalAdd(false)} className='xFechar'>X</span></div>
                                <div className='modalConteudo'>
                                    <h1 className='tituloModal'>Adicionar Novos Contatos</h1>
                                    <hr></hr>
                                    <h2 className='subtituloModal'>Adicionar quantos novos contatos?</h2>
                                    <select className='selectModalQtd' onChange={(e) => setQtdDadosAdd(e.target.value)}>
                                        <option value={1}>1</option>
                                        <option value={10}>10</option>
                                        <option value={100}>100</option>
                                        <option value={1000}>1000</option>
                                        <option value={10000}>10000</option>
                                        <option value={100000}>100000</option>
                                        <option value={1000000}>1000000</option>
                                    </select>
                                </div>
                                <hr></hr>
                                <div className='modalFooter'>
                                    <button className='botao add' onClick={() => adicionarContato()}>Adicionar</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}


const contato = <div>Contato 01</div>

const contatos = [ contato ]