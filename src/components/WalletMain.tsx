import { useEffect } from 'react';
import Payment from '../components/WalletSections/Payment'
import Transactions from './WalletSections/Transactions'

const WalletMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className='p-5 bg-[#F7F6FB]'>
    <Payment />
    <Transactions />

    </section>
  )
}

export default WalletMain