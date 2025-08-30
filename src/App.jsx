import { Services,Subscribe,SuperQuality,CustomerReviews,Hero,PopularProducts,Footer,SpecialOffer } from "./sections"
import Nav from "./components/nav"
export default function App() {
  return (
      <main className="relative">
        <Nav></Nav>
        <section className="xl:padding-1 wide:padding-r padding-b"><Hero></Hero></section>
        <section className="padding"><PopularProducts></PopularProducts></section>
        <section className="padding"><SuperQuality/></section>
        <section className="padding"><Services/></section>
        <section className="padding"><SpecialOffer/></section>
        <section className="bg-pale-blue padding"><CustomerReviews/></section>
        <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
        <section className="bg-black padding-x padding-t"><Footer/></section>
      </main>
    
  )
}