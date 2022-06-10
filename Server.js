import React from "react";
import list from "../data";
import Card from './Card';
import axios from "axios";

 const Server = ({ handleClick }) => {
     return(
        <section className="serverClass">
            
             {list.map((item) => (
                 <Card key={item.id} item = {item} handleClick={handleClick} />
                 
             ))}
             
         </section>
     );
 };


 export default Server;