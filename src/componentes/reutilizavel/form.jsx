import styles from "./form.module.css";
import Botao from '../reutilizavel/botao'

function Form({ onSubmit }) {
    return (
        <form className={styles.form} onSubmit={onSubmit} method="post">

            <div className={styles.campo}>
                <label htmlFor="nome">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    
                </label>

                <input
                    type="text"
                    name="inome"
                    id="nome"
                    required
                    
                />
            </div>

            <div className={styles.campo}>
                <label htmlFor="tel">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.753a16.7 16.7 0 0 0 4.017 6.565 16.7 16.7 0 0 0 6.565 4.017c.584.211 1.269.033 1.753-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.328-1.746a.678.678 0 0 0-.58-.08l-2.217.739a.678.678 0 0 1-.68-.167L6.41 8.25a.678.678 0 0 1-.167-.68l.739-2.217a.678.678 0 0 0-.08-.58z" />
                    </svg>
                    
                </label>

                <input
                    type="tel"
                    name="itel"
                    id="tel"
                    required
                />
            </div>

            <div className={styles.campo}>
                <label htmlFor="email">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83 0 12.104V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.896L9.239 8.83 8 9.586zM16 4.697v7.104l-5.803-3.558z" />
                    </svg>
                    
                </label>

                <input
                    type="email"
                    name="iemail"
                    id="email"
                    required
                />
            </div>

            <div className={styles.campo}>
                <label htmlFor="assunto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        <path d="M4 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 6m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                    </svg>
                    
                </label>

                <input
                    type="text"
                    name="iassunto"
                    id="assunto"
                    required
                />
            </div>

            <div className={styles.campo}>
                <label htmlFor="mensagem">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M14 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5.414l-4.707 4.707A.5.5 0 0 1 0 17.354V2a1 1 0 0 1 1-1z" />
                    </svg>
                    
                </label>

                <textarea
                    name="imensagem"
                    id="mensagem"
                    placeholder="Digite sua mensagem aqui"
                    required
                    rows={5}
                />
            </div>

            <Botao className texto={
                        <div className={styles.botaozin}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                            </svg>
                            
                            <p className={styles.ptexto}>Enviar mensagem</p>
                        </div>
                    } estilo={styles.amarelo}/>

        </form>
    );
}

export default Form;