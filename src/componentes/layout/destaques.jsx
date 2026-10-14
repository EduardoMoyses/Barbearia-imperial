import styles from './destaques.module.css'
import barb1 from '../../imgs/fotosbarbearia/barbeariaf1.jpeg'
import barb2 from '../../imgs/fotosbarbearia/barbeariaf2.jpeg'
import barb3 from '../../imgs/fotosbarbearia/barbeariaf3.jpeg'
import barb4 from '../../imgs/fotosbarbearia/barbeariaf4.jpeg'
import todasf from './../../imgs/fotosbarbearia/barbftodas1.png'
import Botao from '../reutilizavel/botao'

function Destaques() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Nossos destaques</h1>
            <div className={styles.containerFilho}>
                <div className={styles.card}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-scissors" viewBox="0 0 16 16">
                        <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                    </svg>
                    <h2>Corte masculino</h2>
                    <p>Cortes modernos e clássicos.</p>
                </div>
                
                <div className={styles.card}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        >
                        <path d="M256 190c-18-25-44-38-74-38-35 0-65 18-84 48-5 8-3 18 5 23 8 5 18 3 23-5 12-19 32-30 56-30 22 0 42 10 57 29 4 5 10 8 17 8s13-3 17-8c15-19 35-29 57-29 24 0 44 11 56 30 5 8 15 10 23 5 8-5 10-15 5-23-19-30-49-48-84-48-30 0-56 13-74 38z"/>
                        <path d="M120 224c0 97 61 176 136 176s136-79 136-176c0-9-7-16-16-16-5 0-10 2-13 6-23 27-58 42-107 42s-84-15-107-42c-3-4-8-6-13-6-9 0-16 7-16 16z"/>
                    </svg>
                    <h2>Barba desenhada</h2>
                    <p>Barba alinhada com estilo e precisão.</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.icons}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M2.5 12c2.5-3.8 6-5.8 9.5-5.8s7 2 9.5 5.8"/>
                            <path d="M4 11.8c2.2-2.3 4.9-3.5 8-3.5 3.1 0 5.8 1.2 8 3.5"/>
                            <path d="M6.2 10.7c1.6-.9 3.6-1.4 5.8-1.4s4.2.5 5.8 1.4"/>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M2.5 12c2.5-3.8 6-5.8 9.5-5.8s7 2 9.5 5.8"/>
                            <path d="M4 11.8c2.2-2.3 4.9-3.5 8-3.5 3.1 0 5.8 1.2 8 3.5"/>
                            <path d="M6.2 10.7c1.6-.9 3.6-1.4 5.8-1.4s4.2.5 5.8 1.4"/>
                        </svg>
                    </div>

                    <h2>Sobrancelha</h2>
                    <p>Design que realça seu olhar e valoriza seu rosto.</p>
                </div>
            </div>

                <h2 className={`${styles.titulo} ${styles.titulo2}`}>Por que escolher a imperial?</h2>
            
                <div className={styles.containerCards2}>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <div className={styles.icons2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                        </div>
                        <div>
                            <div>
                                <h3>Atendimento personalizado</h3>
                                <p>Cada cliente é único. Atentimento dedicado <br /> para entender seu estilo.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <div className={styles.icons2}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M8 2h3l1 6H9L8 2"/>
                                <path d="M13 2h3l-1 6h-3l1-6"/>
                                <circle cx="12" cy="15" r="6"/>
                                <path d="M12 11.8l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.8z"/>
                            </svg>
                        </div>
                        <div>
                            <h3>Profissionais experientes</h3>
                            <p>Barbeiros qualificados e apaixonados <br /> pelo que fazem.</p>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <div className={styles.icons2}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <rect x="7" y="3" width="10" height="6" rx="2"/>
                                <rect x="6" y="10" width="12" height="4" rx="1"/>
                                <path d="M6 11H4v3"/>
                                <path d="M18 11h2v3"/>
                                <path d="M12 14v4"/>
                                <path d="M8 22h8"/>
                                <path d="M12 18v4"/>
                            </svg>
                        </div>
                        <div>
                            <h3>Ambiente climatizado</h3>
                            <p>Confronto e comodidade em um ambiente <br /> moderno e sofisticado.</p>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <div className={styles.icons2}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9"/>
                                <path d="M12 7v5l3 2"/>
                            </svg>
                        </div>
                        <div>
                            <h3>Atendimento com hora marcada</h3>
                            <p>Seu tempo é valioso. Agende seu horário <br /> é eviete filas.</p>
                        </div>
                    </div>
                    
                </div>

            <h2 className={styles.titulo}>Nossa Barbearia</h2>

            <div className={styles.imagensBarb}>
                <img className={styles.todas} src={todasf} alt="foto" />
            </div>


                <div className={styles.containerAgendar}>
                    <div className={styles.agendar}>
                        <div className={styles.ptexto}>
                            <h2>Pronto para <br className={styles.mostrar}/> <span style={{color: 'rgb(212, 184, 20)'}}>transformar</span> <br className={styles.mostrar}/> seu visual?</h2>
                            <p>Agende agora e viva a experiência imperial.</p>
                        </div>
                

                    <Botao
                        texto={
                            <div className={styles.contentAgendar}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>{" "}
                                                
                                <p className={styles.ptexto2}>Agendar pelo WhatsApp</p>
                            </div>
                        }
                        estilo={styles.amarelo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Destaques