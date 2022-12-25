/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import '../assets/styles/global.css'

const navData = [
  {
    route: '/home',
    label: 'Home'
  },
  {
    route: '/about',
    label: 'About'
  },
  {
    route: '/faq',
    label: 'FAQ'
  }
]

const cardsData = [
  {
    image: 'https://assets-es.imgfoot.com/media/cache/642x382/copa-rey.jpg',
    title: 'Copa del Rey',
    description: 'lorem ipsum sit admet'
  },
  {
    image: 'https://img.asmedia.epimg.net/resizer/b25EdSPFc7Q52gzL5q5AxId3Ub4=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/TDDCIUQD5ZOTDDONDBGQ3O3GVY.jpg',
    title: '"Balon de Oro"',
    description: 'lorem ipsum sit admet'
  },
  {
    image: 'https://www.elnacional.cat/uploads/s1/39/88/29/9/champions-copa-sorteig-quarts-final-efe_1_630x630.jpeg',
    title: '"Champions Cup:',
    description: 'lorem ipsum sit admet'
  },
  {
    image: 'https://media.meer.com/attachments/fbdb54ff9f478b410934657f9fb7601d59425304/store/fill/1090/613/d9eb80dc5f544bf569a06e6ea58d99442ecf9d675d1ae8e562ac5cfc4449/Trofeo-oficial-FIFA-de-la-Copa-del-Mundo-de-futbol.jpg',
    title: '"Copa del Mundo"',
    description: 'lorem ipsum sit admet'
  }
]

function Home () {
  return (
    <section className='home'>
      <Navbar
        navlinks={navData}
        image='https://cdn.shopify.com/s/files/1/0252/7490/8726/files/messi-logo-word.png?v=1657033891'
      />
      <Banner
        image={process.env.PUBLIC_URL + '/images/banner2.jpg'}
        title='El futbol es mi Pasión'
        description='"En el fútbol como en la relojería, el talento y la elegancia
        no significan nada sin rigor y precisión"'
        button='Acerca de'
      />

      <h1 className='center premios'> "Mayores Premios" </h1>
      <Cards data={cardsData} />
      <Footer image='https://cdn.shopify.com/s/files/1/0252/7490/8726/files/messi-logo-word.png?v=1657033891' />
    </section>
  )
}

export default Home
