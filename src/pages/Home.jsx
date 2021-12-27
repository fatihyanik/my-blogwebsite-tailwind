import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"

function Home() {
    return (
        <d>
            <Header /> 
            <div className="flex">
                <Posts />
                <Sidebar />
            </div>         
    
        </d>
    )
}

export default Home
