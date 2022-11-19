import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/sol-utils";

function NFT({ tokenAdd, nftMint }) {
  return (
    <div>
      <h3>Wallet: {tokenAdd}</h3>
      <h3>Native Balance: {nftMint} Sol</h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  await Moralis.start({
    apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    // ...and any other configuration
  });

  const address = "BWeBmN8zYDXgx2tnGj72cA533GZEWAVeqR9Eu29txaen";

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.account.getNFTs({
    address,
    network,
  });

  return {
    props: {
      tokenAdd: response.associatedTokenAddress,
      nftMint: response.mint,
    },
  };
}

export default NFT;
