import Head from 'next/head'
import Image from 'next/image'
 
import Login from './login'

export default function Home() {
   
  return (
    <div className=''>
      <Head>
        <title>Sibaq-22</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Login />
     
      
    </div>
  )
}
