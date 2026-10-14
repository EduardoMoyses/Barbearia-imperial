import styles from './servicos.module.css'
import logo from './../../imgs/crown.png'
import crown from '../../imgs/logocta.png'
import Barra from '../reutilizavel/barra'
import { useState } from 'react'


function Icone({ tipo }) {

    const icones = {

        tesoura: (
            <>
                <circle cx="7" cy="7" r="3" />
                <circle cx="7" cy="17" r="3" />
                <path d="M9.5 9.5L21 21" />
                <path d="M9.5 14.5L21 3" />
            </>
        ),

        barba: (
            <>
                <path d="M5 8c2 1 4 1 7 1s5 0 7-1" />
                <path d="M4 9c1 5 3 9 8 9s7-4 8-9" />
                <path d="M7 13c1 2 2 3 5 3s4-1 5-3" />
            </>
        ),

        sobrancelha: (
            <>
                <path d="M3 10c5-5 13-5 18 0" />
                <path d="M5 14c2 3 4 4 7 4s5-1 7-4" />
                <path d="M7 15l-1 3" />
                <path d="M10 16v3" />
                <path d="M13 16v3" />
                <path d="M16 15l1 3" />
            </>
        ),

        acabamento: (
            <>
                <path d="M6 3h12" />
                <path d="M8 3v5" />
                <path d="M16 3v5" />
                <rect x="5" y="8" width="14" height="12" rx="2" />
            </>
        ),

        pessoa: (
            <>
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21c0-4 3-7 8-7s8 3 8 7" />
            </>
        ),

        estrela: (
            <>
                <path d="M12 2l3 6 7 .8-5 4.8 1.2 7-6.2-3.3L5.8 20l1.2-7-5-4.8L9 8z" />
            </>
        ),

        cadeira: (
            <>
                <path d="M7 4v7h10" />
                <path d="M7 11h10c2 0 3 1 3 3v2H7z" />
                <path d="M9 16v5" />
                <path d="M17 16v5" />
                <path d="M5 21h15" />
            </>
        ),

        relogio: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v6l4 3" />
            </>
        ),

        produto: (
            <>
                <path d="M9 3h6" />
                <path d="M8 6h8" />
                <rect x="6" y="6" width="12" height="15" rx="2" />
                <path d="M9 10h6" />
            </>
        ),

        coroa: (
            <>
                <path d="M3 7l4 4 5-8 5 8 4-4-2 12H5z" />
                <path d="M5 17h14" />
                <path d="M6 21h12" />
            </>
        )
    }

    return (
        <svg
            className={styles.icone}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {icones[tipo]}
        </svg>
    )
}


function TituloSecao({ children }) {

    return (
        <h2 className={styles.tituloSecao}>
            <span>{children}</span>
        </h2>
    )
}


function Servicos() {

    const [aberta, setAberta] = useState(null)


    const servicos = [
        {
            icone: 'tesoura',
            titulo: 'CORTE MASCULINO',
            descricao:
                'Cortes modernos e clássicos com acabamento impecável e finalização profissional.',
            preco: 'R$ 70'
        },
        {
            icone: 'barba',
            titulo: 'BARBA',
            descricao:
                'Modelagem completa com desenho, alinhamento e acabamento com navalha.',
            preco: 'R$ 60'
        },
        {
            icone: 'sobrancelha',
            titulo: 'SOBRANCELHA',
            descricao:
                'Design que realça seu olhar e valoriza seu rosto com naturalidade.',
            preco: 'R$ 30'
        },
        {
            icone: 'tesoura',
            titulo: 'COMBO CORTE + BARBA',
            descricao:
                'A combinação perfeita para um visual completo e alinhado.',
            preco: 'R$ 120',
            destaque: 'MAIS PROCURADO'
        }
    ]


    const diferenciais = [
        {
            icone: 'pessoa',
            titulo: 'ATENDIMENTO INDIVIDUAL'
        },
        {
            icone: 'estrela',
            titulo: 'PROFISSIONAIS EXPERIENTES'
        },
        {
            icone: 'cadeira',
            titulo: 'AMBIENTE CLIMATIZADO'
        },
        {
            icone: 'produto',
            titulo: 'PRODUTOS DE QUALIDADE'
        },
        {
            icone: 'relogio',
            titulo: 'HORÁRIO MARCADO'
        },
        {
            icone: 'coroa',
            titulo: 'ACABAMENTO DE ALTO PADRÃO'
        }
    ]


    const estilos = [
        {
            titulo: 'CLÁSSICO',
            descricao:
                'Para quem prefere cortes tradicionais e atemporais.'
        },
        {
            titulo: 'MODERNO',
            descricao:
                'Degradês, fades e texturizações com as últimas tendências.'
        },
        {
            titulo: 'EXECUTIVO',
            descricao:
                'Visual discreto e alinhado para o dia a dia e ambientes formais.'
        },
        {
            titulo: 'BARBA',
            descricao:
                'Do alinhamento simples ao desenho completo e bem definido.'
        }
    ]


    const perguntas = [
        {
            pergunta: (
                <>
                    <span className={styles.destaque}>Preciso</span> agendar?
                </>
            ),
            resposta:
                'Recomendamos o agendamento para garantir seu horário e evitar qualquer espera.'
        },
        {
            pergunta: (
                <>
                    Quanto tempo <span className={styles.destaque}>dura</span> o atendimento?
                </>
            ),
            resposta:
                'Entre 30 e 60 minutos, dependendo do serviço escolhido.'
        },
        {
            pergunta: (
                <>
                    Posso fazer corte e <span className={styles.destaque}>barba</span> no mesmo horário?
                </>
            ),
            resposta:
                'Sim. Temos opções de atendimento combinado para sua comodidade.'
        },
        {
            pergunta: (
                <>
                    <span className={styles.destaque}>Aceitam</span> pagamento por cartão?
                </>
            ),
            resposta:
                'Sim. Aceitamos cartão de crédito, débito e PIX.'
        }
    ]


    const alternarPergunta = (index) => {
        setAberta(aberta === index ? null : index)
    }


    return (

        <main className={styles.container}>

            {/* =====================================================
                CABEÇALHO
            ===================================================== */}

            <header className={styles.header}>

                <h1>
                    Estilo, precisão e <span>confiança</span>
                </h1>

                <p>
                    Serviços pensados para valorizar sua imagem e
                    realçar sua personalidade.
                </p>

            </header>


            {/* =====================================================
                LOGO
            ===================================================== */}

            <div className={styles.containerLogo}>

                <span aria-hidden="true" />

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Imperial"
                />

                <span aria-hidden="true" />

            </div>


            {/* =====================================================
                COMO FUNCIONA
            ===================================================== */}

            <section className={styles.comoFunciona}>

                <TituloSecao>
                    COMO FUNCIONA
                </TituloSecao>

                <div className={styles.etapas}>

                    <div className={styles.etapa}>
                        <div className={styles.numero}>1</div>

                        <h3>ESCOLHA</h3>

                        <p>
                            Escolha o serviço ideal para o seu estilo e necessidade.
                        </p>
                    </div>


                    <div className={styles.etapa}>
                        <div className={styles.numero}>2</div>

                        <h3>AGENDE</h3>

                        <p>
                            Agende seu horário de forma rápida e prática.
                        </p>
                    </div>


                    <div className={styles.etapa}>
                        <div className={styles.numero}>3</div>

                        <h3>ATENDIMENTO</h3>

                        <p>
                            Nosso profissional entende seu objetivo e cuida de cada detalhe.
                        </p>
                    </div>


                    <div className={styles.etapa}>
                        <div className={styles.numero}>4</div>

                        <h3>FINALIZAÇÃO</h3>

                        <p>
                            Você sai pronto, confiante e com o visual renovado.
                        </p>
                    </div>

                </div>

            </section>


            {/* =====================================================
                DIFERENCIAIS
            ===================================================== */}

            <section className={styles.secaoDiferenciais}>

                <TituloSecao>
                    NOSSOS DIFERENCIAIS
                </TituloSecao>

                <div className={styles.gridDiferenciais}>

                    {diferenciais.map((item) => (

                        <article
                            className={styles.diferencial}
                            key={item.titulo}
                        >

                            <Icone tipo={item.icone} />

                            <h3>
                                {item.titulo}
                            </h3>

                        </article>

                    ))}

                </div>

            </section>


            {/* =====================================================
                ESTILOS
            ===================================================== */}

            <section className={styles.secaoEstilos}>

                <TituloSecao>
                    ATENDEMOS DIFERENTES ESTILOS
                </TituloSecao>


                <div className={styles.gridEstilos}>

                    {estilos.map((item) => (

                        <article
                            className={styles.estilo}
                            key={item.titulo}
                        >

                            <div className={styles.iconeEstilo}>
                                <Icone tipo="pessoa" />
                            </div>

                            <h3>
                                {item.titulo}
                            </h3>

                            <p>
                                {item.descricao}
                            </p>

                        </article>

                    ))}

                </div>

            </section>


            {/* =====================================================
                SERVIÇOS
            ===================================================== */}

            <section className={styles.listaServicos}>

                <TituloSecao>
                    NOSSOS SERVIÇOS
                </TituloSecao>


                <div className={styles.servicos}>

                    {servicos.map((item) => (

                        <article
                            className={styles.servico}
                            key={item.titulo}
                        >

                            <div className={styles.iconeServico}>
                                <Icone tipo={item.icone} />
                            </div>


                            <div className={styles.infoServico}>

                                {item.destaque && (
                                    <span className={styles.servicoDestaque}>
                                        {item.destaque}
                                    </span>
                                )}

                                <h3>
                                    {item.titulo}
                                </h3>

                                <p>
                                    {item.descricao}
                                </p>

                            </div>


                            <div className={styles.preco}>

                                <span>
                                    A partir de
                                </span>

                                <strong>
                                    {item.preco}
                                </strong>

                            </div>

                        </article>

                    ))}


                    {/* =================================================
                        ACABAMENTOS
                    ================================================= */}

                    <article className={`${styles.servico} ${styles.servicoAcabamentos}`}>

                        <div className={styles.iconeServico}>
                            <Icone tipo="acabamento" />
                        </div>


                        <div className={styles.infoServico}>

                            <h3>
                                ACABAMENTOS
                            </h3>

                            <p>
                                Serviços complementares para manter seu
                                visual sempre em dia.
                            </p>

                        </div>


                        <ul className={styles.listaAcabamentos}>

                            <li>Pé do cabelo</li>
                            <li>Bigode</li>
                            <li>Acabamento de barba</li>
                            <li>Navalhado</li>

                        </ul>

                    </article>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className={styles.perguntas}>

                <TituloSecao>
                    PERGUNTAS FREQUENTES
                </TituloSecao>


                <div className={styles.listaPerguntas}>

                    {perguntas.map((item, index) => (

                        <details
                            className={styles.pergunta}
                            key={index}
                            open={aberta === index}
                        >

                            <summary
                                className={styles.sumario}
                                onClick={(event) => {
                                    event.preventDefault()
                                    alternarPergunta(index)
                                }}
                            >

                                <span className={styles.questao}>
                                    {item.pergunta}
                                </span>

                                <span
                                    className={styles.sinal}
                                    aria-hidden="true"
                                >
                                    {aberta === index ? '−' : '+'}
                                </span>

                            </summary>


                            {aberta === index && (
                                <div className={styles.resposta}>
                                    <p>
                                        {item.resposta}
                                    </p>
                                </div>
                            )}

                        </details>

                    ))}

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}

            <section className={styles.cta}>

                <img
                    className={styles.crown}
                    src={crown}
                    alt="Imperial"
                />

                <div className={styles.ctaConteudo}>

                    <h3>
                        Seu próximo visual <span>começa aqui</span>
                    </h3>

                    <p>
                        Escolha seu horário e venha viver a experiência Imperial.
                    </p>

                </div>

            </section>


            <Barra />

        </main>
    )
}


export default Servicos