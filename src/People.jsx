import { listofItems } from "./auth";
import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom';

const People= ()=>{

    const [items, setItems] = useState([]);

    const TableHeader = () =>{
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
        );
    }

    const loadItems= () => {
        listofItems().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setItems(data);
            }
        });
    };
    useEffect(() => {
        loadItems();
    }, []);

return(
    <table className='table table-bordered'>
         <TableHeader/>
        
        <tbody>
        {items.map((item, index) =>(
                         <tr key={index}>
                         <td>{item.message}</td>
                         <td>{item.age}</td>
                         <td>
                             <div className='d-flex justify-content-between'>
                                 <Link to={`/update-user/${item.id}`} className='btn btn-warning'>Edit</Link>
                             </div>
                         </td>
                     </tr>
         ))}
        </tbody>
      </table>
);
}
export default People;