import React, { Fragment, useState, useEffect } from 'react';
import './FourBox.css';
import {
  calculatePrice,
  formatValue,
  formatNumber,
} from '../../../../utils/index';
import { useContract } from '../../../../Hooks/index';

export const FourBox = ({ price, GS50Price }) => {
  const contract = useContract();

  const [tvl, setTvl] = useState('loading');
  const [totalSupply, setTotalSupply] = useState('loading');
  const [eth, setEth] = useState('loading');
  const [withdrawn, setWithdrawn] = useState('loading');

  useEffect(async () => {
    if (contract) {
      let total_ETH = await contract.totalEthereumBalance();
      setTvl(formatValue(total_ETH));

      let total_supply = await contract.totalSupply();
      setTotalSupply(formatValue(total_supply));

      let total_dep = await contract.totalDeposited();
      setEth(formatValue(total_dep));

      let total_withdraw = await contract.totalWithdraw();
      setWithdrawn(formatValue(total_withdraw));
    }
  }, [contract, price, GS50Price]);

  return (
    <Fragment>
      <div className="mainbox">
        <div>
          <p className="boxes" id="box_1">
            Total Value Locked {tvl} ETH
          </p>
          <p className="amount">${calculatePrice(price, tvl)}</p>
        </div>
        <div>
          <p className="boxes" id="box_2">
            Token Supply {formatNumber(totalSupply)} GS50
          </p>
          <p className="amount-2">${calculatePrice(GS50Price, totalSupply)}</p>
        </div>
        <div className="boxes" id="box_3">
          <p>Total {eth} ETH Deposited since inception</p>
          <p className="amount">${calculatePrice(price, eth)}</p>
        </div>
        <div>
          <p className="boxes" id="box_4">
            {' '}
            Total {withdrawn} ETH Withdrawn since inception
          </p>

          <p className="amount">${calculatePrice(price, withdrawn)}</p>
        </div>
      </div>
    </Fragment>
  );
};
