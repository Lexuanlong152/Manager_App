import Header from "./Header";
import RoleManagement from "./RoleManagement";
// import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Dashboard(){
    return (
        <div>
            {/* <Sidebar /> */}
            <Header />
            <RoleManagement />
            <Footer />
        </div>
    )
};

export default Dashboard;