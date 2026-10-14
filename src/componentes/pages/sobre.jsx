import styles from './sobre.module.css'
import logo from './../../imgs/crown.png'
import imperial from '../../imgs/imperialfoto.png'
import fundador from   './../../imgs/sobre/fundador.png'
import linhaDoTempo from './../../imgs/linhadotempo.png'
import logoCta from './../../imgs/logocta.png'
import barbSobre from './../../imgs/fotosbarbearia/barbsobre.png'
import Botao from './../reutilizavel/botao'
import Barra from './../reutilizavel/barra'

function Sobre() {
    return (
        <div className={styles.container}>
            <header className={styles.cabecario}>
                <img src={imperial} alt="Barbearia imperial" className={styles.imagem} />
            </header>
            <h1 className={styles.titulo}>Sobre Nós</h1>
            
            <div className={styles.barbearia}>
                <p>Mais que uma barbearia, um simbolo de <span className={styles.destaque}>excelência.</span></p>
                <p>A Barbearia Imperial nasceu com um propósito: 
                    elevar o padrão do cuidado masculino e entregar mais que um corte,
                     uma <span className={styles.destaque}> experiência</span> de <span className={styles.destaque}> respeito</span>,
                       <span className={styles.destaque}> confiança</span> e <span className={styles.destaque}> identidiade</span>.</p>

            </div>
            <div className={styles.bio}>
                <h2 className={styles.destaque}>Nosso fundador</h2>
                <img className={styles.fundador} src={fundador} alt="Lucas Almeida" />
                <div className={styles.bioContent}>
                    <h3>Lucas Almeida</h3>
                    <p className={styles.destaque}>Fundador & barbeiro</p>
                    
                    <p>
                        Apaixonado por barbearia desde cedo,
                         Lucas transformou sua paixão em propósito. 
                         Após anos de dedicação, estudos e experiências, 
                         criou a Barbearia Imperial para oferecer um novo
                          conceito em cuidados masculinos.
                    </p>
                    <p className={styles.destaque}>“Meu objetivo sempre foi simples: fazer cada cliente se sentir na sua melhor versão.”</p>
                </div>
            </div>
            <h2 className={styles.tituloLinha}>Nossa História</h2>
            <img className={styles.linhaTempo} src={linhaDoTempo} alt="Linha do Tempo" />

            <div className={styles.missao}>
                <img className={styles.logoCta} src={logoCta} alt="logo imperial" />
                <h3>Nossa Missão</h3>
                <p>
                    Proporcionar experiências únicas que elevam a autoestima e o estilo de cada cliente,
                    com atendimento personalizado, ambiente sofisticado e serviços de alta qualidade.</p>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div>
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M30 5H45V35H30V5Z" fill="currentColor"/>
                                    <path d="M55 5H70V35H55V5Z" fill="currentColor"/>
                                    <circle
                                        cx="50"
                                        cy="60"
                                        r="32"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="5"
                                    />
                                    <path
                                        d="M50 38
                                        L56 52
                                        L71 53
                                        L60 63
                                        L63 78
                                        L50 70
                                        L37 78
                                        L40 63
                                        L29 53
                                        L44 52
                                        Z"
                                        fill="currentColor"/>
                                </svg>
                                <h3>Qualidade</h3>
                                <p>Excelência em cade detalhe, do corte ao atendimento.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M8 43 L25 30 C29 27 34 27 38 30 L48 38" />
                                    <path d="M92 43 L75 30 C71 27 66 27 62 30 L52 38" />
                                    <path d="M25 42 L37 34 C40 32 43 32 46 35 L51 40" />
                                    <path d="M75 42 L63 34 C60 32 57 32 54 35 L49 40" />
                                    <path d="M37 42 L48 52 C51 55 55 55 58 52 L70 40" />
                                    <path d="M43 47 L52 55" />
                                    <path d="M49 43 L58 51" />
                                    <path d="M55 40 L63 48" />
                                    <path d="M8 43 L20 58 C23 62 29 62 32 58 L37 53" />
                                    <path d="M92 43 L80 58 C77 62 71 62 68 58 L63 53" />
                                                        </svg>
                                <h3>Respeito</h3>
                                <p>Valorizamos cada cliente e construímos relações de confiança.</p>
                            </div>
                    </div>
                        <div className={styles.card}>
                            <div>
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M10 30 L25 12 L75 12 L90 30 L50 88 Z" />
                                    <path d="M10 30 H90" />
                                    <path d="M25 12 L40 30 L50 88" />
                                    <path d="M75 12 L60 30 L50 88" />
                                    <path d="M40 30 H60" />
                                </svg>
                                <h3>Identidade</h3>
                                <p>Mais que estilo, ajudando você a revelar sua melhor versão.</p>
                            </div>
                        </div>
                    </div>
            </div>
            <section className={styles.finalCTA}>
    <div className={styles.finalCTAContent}>
        <img
            className={styles.finalLogo}
            src={logoCta}
            alt="Barbearia Imperial"
        />

        <span className={styles.finalLabel}>BARBEARIA IMPERIAL</span>

        <h2>Pronto para viver a experiência Imperial?</h2>

        <p>
            Seu estilo merece atenção aos detalhes.
            Agende seu horário e venha conhecer a
            experiência de uma barbearia feita para você.
        </p>

        <Botao
            texto={
                <span className={styles.botaoWhats}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>

                    <span>Agendar pelo WhatsApp</span>
                </span>
            }
            estilo={styles.botaoFinal}
        />
    </div>
</section>
<Barra/>
        </div>
    )
}

export default Sobre