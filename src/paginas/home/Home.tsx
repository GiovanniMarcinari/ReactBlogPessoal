import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])
  
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#1E3276" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#1E3276", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/FqE6URO.jpg" alt="" width="550px" height="550px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "grey" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;