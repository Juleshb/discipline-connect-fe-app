import Navbar from "../Nav/nav";
import Sidebar from "../Sidebar/Sidebar";
import SearchComponent from "../shared/searchBar";
import TopNavigation from "./TopNavigation";
export default function Permissions(){
    return(
        <>
      <Sidebar />
      <div className="relative md:ml-64 bg-secondary h-screen">
        <Navbar />

        <div className="relative md:pt-10 sm:pb-40 pt-20 pb-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex p-3 m-4 bg-white h-auto space-x-4 rounded-lg">
            <SearchComponent/>
        </div>
            <TopNavigation/>
         
        </div>
        
       
      </div>
    
    </>
    )
}