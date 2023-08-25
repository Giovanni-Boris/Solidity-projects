import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) getCampaigns();
  }, [address, contract]);
  return <div>Home</div>;
};

export default Home;
