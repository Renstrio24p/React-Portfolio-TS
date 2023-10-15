import { Outlet } from 'react-router-dom'
const Sidebar = React.lazy(()=>import('../../elements/Sidebar/Sidebar'));
import './Layout.scss'

export default function Layout(){

    return (
        <div className='layout'>
            <Sidebar />
            <div className="blur l-blur1"></div>
            <div className="blur l-blur2"></div>
            <Outlet />
        </div>
    )

}