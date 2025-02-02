import React from 'react'
import Layout from '../components/Layout';
import Philosophy from '../components/Philosophy';
import FutureFinance from '../components/FutureFinance';
import Top from '../components/Top';

const Home = () => {
  return (
    <Layout>
      <Top />
      <Philosophy />
      <FutureFinance />
    </Layout>
  )
}

export default Home;