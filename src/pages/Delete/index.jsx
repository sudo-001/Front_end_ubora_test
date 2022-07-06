import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import deletedContacts from '../../utils/Deleted_Contacts';


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
                    deletedContacts.push(res.data)
                }))
                .catch((err) => console.log(err))
        } else {
            console.log("no");
        }
        window.location.href="/contact";
    }, [])

    console.log(deletedContact);

    return (
        <div></div>
    )
}

export default Delete