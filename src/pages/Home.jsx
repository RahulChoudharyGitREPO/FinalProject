import HomeImg from '../pages/Home/home.jpg'
import Navbar from '../Components/navbar/Navbar';
export default function Home() {
    return (
        <>
            <Navbar />

            <div className="image-container">
                <img src={HomeImg} alt="" className='MainImg' />
            </div>
            <h1>Home</h1>
        </>
    );
}
