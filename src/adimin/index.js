import Navbar from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/Sidebar";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        
       
      </div>
    </>
  );
}
