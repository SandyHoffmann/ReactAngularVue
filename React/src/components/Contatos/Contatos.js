export function Contatos(props){
    return(
        <>
        {
            props.contatos && props.contatos.map((contato) => {
                return (
                    <div key={contato.id} className="contato">
                        <div>
                            <div className='imgContato' />
                        </div>
                        <h3>{contato.nome}</h3>
                        <p>telefone: {contato.telefone}</p>
                        <p>email: {contato.email}</p>
                    </div>
                )
            })
        }
        </>
    )
}