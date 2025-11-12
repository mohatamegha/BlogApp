import BlogList from "../components/BlogList"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import Newsletter from "../components/NewsLetter"

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <BlogList/>
            <Newsletter/>
        </>
    )
}
export default HomePage