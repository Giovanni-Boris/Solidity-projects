import React, { useConext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xcAbf73d088DdAD354dAa2F4A7F8DF2D58171Ccf7",
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign",
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, //owner of campaign
        form.title, //title
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);
      console.log("Contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };
  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useConext(StateContext);
