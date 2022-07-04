import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import { Loader } from '../../utils/style/Atoms';
import Colors from '../../utils/style/Colors';

const ContactHomeWrapper = styled.div`
    background-color: ${Colors.background};
    height: max-content;
    padding: 20px 70px;
`

const FormContainer = styled.div`
    background: white;
    bow-shadow: 2px 2px 15px black;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    
    form {
        display: flex;
        align-items: center;
    }
    
    input {
        height: 30px;
        margin-right: 10px;
        padding: 5px;
        font-size: medium;
        border-radius: 10px;
        border: solid 1px black;
    }

    button {
        height: 30px;
        border-radius: 10px;
        border: solid black 1px;
        cursor: pointer;
    }
`

const ResultsContainer = styled.div`
    background: white;
    bow-shadow: 2px 2px 15px black;
    padding: 10px 0px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
`
const CardContainer = styled.div`
    // border: solid green;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    
`

function Contact() {
    const [isLoadingContacts, setLoadingContacts] = useState(true)
    const [contactsList, setContactsList] = useState([])

    function handleSearch(e) {
        e.preventDefault();
        let input = document.querySelector("input");

        console.log(input.value);
    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/contact")
            .then((res) => {
                console.log(res);
                setContactsList( res.data );
                setLoadingContacts(false);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <ContactHomeWrapper>
            <FormContainer>
                <form>
                    <input type='search' name='keyword' placeholder='Rechercher' onKeyUp={handleSearch} />
                    <button type="submit" >Rechercher</button>
                </form>
            </FormContainer>

            <ResultsContainer>
                {isLoadingContacts ? (
                <Loader />
                ) : (
                   <CardContainer>
                        { contactsList.map((contact) => (
                            <Card
                                key={contact._id}
                                nom={contact.nom}
                                prenom={contact.prenom}
                                telephone={contact.telephone}
                                email={contact.email}
                                projets={contact.projets}
                            />
                        ))}
                   </CardContainer>
                )}
            </ResultsContainer>
        </ContactHomeWrapper>
    )
}

export default Contact;