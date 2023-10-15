import { RouterProvider } from 'react-router-dom';
import { router } from './components/router';


export default function Start(){

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )

}
