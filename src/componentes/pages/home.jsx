import Header from '../layout/header'
import Banner from '../layout/banner'
import Destaques from '../layout/destaques'
import Barra from '../reutilizavel/barra'

function Home() {
    return (
        <>
        <div className='containerPai'>
        <Header/>
        <Banner/>
        <Destaques />
      
      </div>
      <Barra/>
        </>
    )
}

export default Home