import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Colors from '../../utils/style/Colors';

const AddContactContainer = styled.div`
    background-color: ${Colors.background};
    padding: 20px 30px;
    position: relative;
    > h2 {
        color: #5496ca;
    }
`

const FormContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    position: relative;

    >h3 {
        margin-left: 20px;
    }
`

const FormStyle = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
`

const InputContent = styled.div`

    width: 40%;
    margin: 20px;
    display: flex;
    flex-direction: column;

    span {
        color: red;
    }
    >input {
        margin: 5px 0px;
        height: 25px;
        padding: 2px;
        font-size: medium;
    }

`

const ButtonsStyle = styled.div`
    position: absolute;
    bottom: -20px;
    width: 100%;
    margin: 20px 0px;
    text-align: center;

    button {
        padding: 10px;
        font-size: medium;
        margin: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .btn1 {
        border: solid green 1px;
        &:hover {
            background: green;
            color: white;
        }
    }

    .btn2 {
        border: solid red 1px;
        &:hover {
            background: red;
            color: white;
        }
    }
`

function AddContact() {
    const [contact, setContact] = useState({
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        projets: '',
        taches: ''
    });

    function handleChange(e) {

        setContact({
            ...contact, [e.target.name]: e.target.value
        });

        console.log(contact)
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/api/contact/add', contact)
            .then((res) => {
                console.log(res);
                alert('Contact ajouté avec succès')

            })
            .catch(err => {
                console.log(err)
                // console.log(err);
            })
    }

    return (
        <AddContactContainer>
            <h2>Ajout de Contact</h2>
            <FormContainer>
                <h3>Informations du Contact</h3>
                <FormStyle onSubmit={handleSubmit}>

                    <InputContent>
                        <label htmlFor="prenom">Prenom </label>
                        <input type="text" name="prenom" id="prenom" placeholder='Ex: John...' onKeyUp={handleChange} onInput={handleChange} />
                    </InputContent>

                    <InputContent>
                        <label htmlFor="nom">Nom <span>*</span></label>
                        <input type="text" name="nom" id="nom" placeholder='Ex: Doe...' onKeyUp={handleChange} onInput={handleChange} />
                    </InputContent>

                    <InputContent>
                        <label htmlFor="email">Couriel <span>*</span></label>
                        <input type="email" name="email" id="email" placeholder='Ex: JohnDoe@example.com' onKeyUp={handleChange} onInput={handleChange} />
                    </InputContent>

                    <InputContent>
                        <label htmlFor="telephone">Téléphone <span>*</span></label>
                        <input type="text" name="telephone" id="telephone" placeholder='Ex: +1 23...' required onKeyUp={handleChange} onInput={handleChange} />
                    </InputContent>

                    <InputContent>
                        <label htmlFor="projet">Projet sur le quel vous travaillez</label>
                        <input type="text" name="projets" id="projet" placeholder='Ex: Application mobile site e-commerce "MAMASHOP"' onKeyUp={handleChange} onInput={handleChange} />
                    </InputContent>


                    <ButtonsStyle>
                        <button type="submit" className='btn1'>Enregistrer</button>
                        <Link to="/contact"><button className='btn2'>Annuler</button></Link>
                    </ButtonsStyle>

                </FormStyle>
            </FormContainer>
        </AddContactContainer>
    )
}

export default AddContact;