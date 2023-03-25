import { Helmet } from 'react-helmet-async';
// sections
import {Box, Button, Card, Container, CardMedia, Paper, Stack, Typography} from "@mui/material";
import {observer} from "mobx-react";

import Web3 from 'web3';

import {useNavigate} from "react-router-dom";
import {rootStore} from "../mobX/stores";


// ----------------------------------------------------------------------

export function LoginPage() {
  const nav = useNavigate();

  const connectToOKXWallet = async () => {

      // @ts-ignore
      const web3 = new Web3(window.okxwallet);
      const accounts = await web3.eth.requestAccounts();
      console.log(accounts);
      rootStore.userStore.connectWallet(accounts[0], web3);
      nav('/dashboard/market')
  }

  return (
    <>
        <Helmet>
            <title>Connect Wallet</title>
        </Helmet>
        <Stack direction="row" spacing={4} justifyContent="center" height="100%" alignItems="center">
            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="300"
                    src="/assets/images/auth/okx_wallet.png"
                />
                <Button size="large" fullWidth onClick={connectToOKXWallet}>Connect to wallet</Button>
            </Card>
            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="300"
                    src="/assets/images/auth/metamask_wallet.png"
                />
                <Button size="large" fullWidth>Connect to wallet</Button>
            </Card>
        </Stack>
    </>
  );
}

export default observer(LoginPage);
