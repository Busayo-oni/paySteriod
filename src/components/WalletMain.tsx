import Payment from '../components/WalletSections/Payment'
import Transactions from './WalletSections/Transactions'

const WalletMain = () => {
  return (
    <section className='p-5 bg-[#F7F6FB]'>
    <Payment />
    <Transactions />

    </section>
  )
}

export default WalletMain