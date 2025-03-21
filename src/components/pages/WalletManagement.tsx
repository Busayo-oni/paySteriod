import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Jsb from "../../assets/icons/jsb.png";
import message from "../../assets/icons/message.png";
import notification from "../../assets/icons/notification.png";
import member from "../../assets/icons/member.png";
import WalletMain from "../WalletMain";
import Navbar from "../Navbar";

const WalletManagement = () => {
    const [opener, { toggle }] = useDisclosure();
  return (
    <AppShell
    layout="alt" // Ensures header starts beside the navbar
    navbar={{
      width: 300,
      breakpoint: "sm",
      collapsed: { mobile: !opener },
    }}
    header={{ height: 60 }}
    padding="md"
  >
    {/* Sidebar/Navbar */}
    <AppShell.Navbar p="md">
      <Navbar />
    </AppShell.Navbar>

    <AppShell.Header className="flex items-center px-4 bg-gray-800">
      <Burger opened={opener} onClick={toggle} hiddenFrom="sm" size="sm" />                
      <section className="flex items-center justify-between px-4 w-full">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
        <img src={Jsb} alt="Logo"  />
        <h1 className="text-[16px] font-semibold text-[#48464E] ">SBSC LLC</h1>
        </div>
        <button className="rounded-full hidden lg:block px-2 text-xs font-medium bg-[#F0EEF7] text-[#3E1C96] ">
        Premium Subscription
        </button>
      </div>
      <div className="flex items-center gap-2">
        <img src={notification} alt="notification icon" />
        <img src={message} alt="message icon" />
        <img src={member} alt="member" />
      </div>
      </section>
    </AppShell.Header>


    <AppShell.Main className="p-4 bg-gray-100">
      <WalletMain />
    </AppShell.Main>
  </AppShell>
  )
}

export default WalletManagement