import NavbarHead from "../Layout/Navbar/NavbarHead"
import Hero from "../component/Hero"
import CardSlider from "../component/CardSlider"
import BestSeller from "../component/BestSeller"
export default function Home(){
    return(
        <>
        <NavbarHead />
        <h1 className="fs-11 text-center">ELEENA</h1>
        <Hero/>
        <CardSlider/>
        <BestSeller/>
        </>

    )
}