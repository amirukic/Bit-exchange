import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

function Coin() {
  const [coin, setCoin] = useState();
  const { uuid } = useParams();

  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const getData = () => {
    axios.request(options).then(function (response) {
      console.log(response.data.data.coin);
      setCoin(response.data.data.coin);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="mt-9" />
      <div className="flex ml-2 mt-3">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Coins Logo"
        />
        <h1>crypto List</h1>
      </div>
      <hr className="border-t-2 border-indigo-200" />
      <div className="flex mt-2  items-center p-4 ml-2 w-2/3 justify-around">
        <img src={coin?.iconUrl} width={30} />
        <p className="mr-13 font-bold">{coin?.name}</p>
        <p>{coin?.symbol}</p>
        <p className="border-x-4 border-grey-300"> # {coin?.rank}</p>
        <p className="font-bold">
          $ {coin?.price}{" "}
          <span className="border-2 border-grey-200 font-serif text-red-500">
            Live
          </span>
        </p>
      </div>
      <hr className="border-t-2 border-indigo-200" />
      <div className="flex items-center justify-around mt-10  w-2/3">
        <h3 className="font-bold mb-2 ">Price chart </h3>
        <p>
          24h <span className="text-green-500">{coin?.change} %</span>
        </p>
        <p>High $ {coin?.supply?.max} </p>
      </div>
      <hr className="border-t-2 border-indigo-200" />
      <div className="mt-4/2 mb-12">
        <img src=" https://i.im.ge/2022/10/03/1VTQ2y.Screenshot-2022-10-03-at-15-54-47.png" />
      </div>
      <div className="flex">
        <div className="mt-2">
          <div className="ml-4  text-3xl text-center ">Value statistics</div>
          <div>
            <p className="ml-4 text-zinc-600 mt-5">
              An overview showing the statistics of Bitcoin, such as the base
              and quote currency <br></br>the rank, and trading volume.
            </p>
          </div>

          <div className="flex items-center justify-around  mt-9  ">
            <PaidOutlinedIcon fontSize="large" color="primary" />
            <h1>Price to EUR</h1>
            <h3 className="font-bold">{coin?.price}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9">
            <CurrencyBitcoinOutlinedIcon fontSize="large" color="primary" />
            <h1>Price to BTC</h1>
            <h3 className="font-bold">
              {coin?.priceAt} {coin?.symbol}
            </h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />

          <div className="flex items-center justify-around mt-9 mr-40  ">
            <BarChartOutlinedIcon fontSize="large" color="primary" />
            <h1>Rank</h1>
            <h3 className="font-bold"> {coin?.rank}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around w-3/2 mt-9">
            <EggOutlinedIcon fontSize="large" color="primary" />
            <h1>24h volume</h1>
            <h3 className="font-bold"> {coin?.price}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9 mr-20 ">
            <WaterOutlinedIcon fontSize="large" color="primary" />
            <h1>Market cap</h1>
            <h3 className="font-bold">${coin?.supply.supplyAt}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9">
            <WaterOutlinedIcon fontSize="large" color="primary" />
            <h1>Fully diluted market cap</h1>
            <h3 className="font-bold">${coin?.supply.circulating}</h3>
          </div>
          <hr className="border-t-2 border-indigo-300" />
          <div className="flex items-center justify-around mt-9">
            <BeenhereOutlinedIcon fontSize="large" color="primary" />
            <hr />
            <h1>All-time high (daily avg.)</h1>
            <h3 className="">${coin?.supply.total}</h3>
          </div>
        </div>
        <div className="ml-12">
          <h1 className="flex items-center justify-center font-serif  text-3xl">
            Supply information
          </h1>
          <p className="ml-12 mt-8 text-zinc-600 ">
            View the total and circulating supply of Bitcoin, including details
            on how the supplies are calculated.
          </p>
          <div
            style={{
              background: "#f1f6ff",
            }}
            className="w-2/3 rounded h-2/3 ml-9 mt-20   "
          >
            <div className="flex items-center ml-32 ">
              <svg
                className="h-10 w-8 text-green-500 flex justify-around mt-7 ml-10"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
              </svg>
              <h2 className="text-green-500 mt-9   ">Verified supplys</h2>
            </div>
            <div className="ml-3 mt-4  ">
              <p>Updated 2 minutes ago</p>
              <hr />
              <p className="mt-8 flex justify-between">
                Total supply{" "}
                <span className=" font-bold">
                  {" "}
                  $ {coin?.supply.circulating}
                </span>
              </p>
              <hr />
              <p className="mt-11 flex justify-between">
                Max supply{" "}
                <span className=" font-bold">$ {coin?.supply.max}</span>{" "}
              </p>
              <hr />
              <p className="mt-11 flex justify-between">
                Total supply{" "}
                <span className="  font-bold">$ {coin?.supply.total}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-9">What is Bitcoin</h1>

      <div
        className="px-3 pt-3 bg-blue-300"
        dangerouslySetInnerHTML={{ __html: coin?.description }}
      />
    </div>
  );
}

export default Coin;
