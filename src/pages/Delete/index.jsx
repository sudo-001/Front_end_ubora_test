import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Delete() {
    const [deletedContact, setDeletedContact] = useState([])
    
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        if (window.confirm("Voulez vous vraiment suprimer ce contact ? ")) {
            axios.get("http://localhost:5000/api/contact/delete/"+id)
                .then(((res) => {
                    // console.log("contact supprimé");
                    setDeletedContact( res.data )
                    console.log(res)
                }))
                .catch((err) => console.log(err))
        } else {
            console.log("no");
        }
        window.location.href="/contact";
    }, [])

    

    return (
        <div></div>
    )
}

export default Delete