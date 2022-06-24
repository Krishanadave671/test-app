import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
       <Head>
        <title>Codeswear.com </title>
        <meta name="viewport" content="Codeswear.com - wear the code " />
      </Head>
      <Navbar/>
      <div>
        <img src="Home.png" alt="" />
      </div>
      <Footer/>
      
     </div>
  )
}
