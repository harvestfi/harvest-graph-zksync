import {
  BTC_ZK,
  BALANCER_CONTRACT_NAME,
  CAMELOT_CONTRACT,
  CURVE_CONTRACT_NAME,
  F_UNI_V3_CONTRACT_NAME,
  LP_UNI_PAIR_CONTRACT_NAME,
  MESH_SWAP_CONTRACT,
  POISON_FINANCE_CONTRACT,
  VELOCORE_NAME,
  WETH_LIST_ZK,
  SYNC_SWAP_CONTRACT_NAME,
} from './Constant';
import { WeightedPool2TokensContract } from '../../generated/Controller/WeightedPool2TokensContract';
import { Address } from '@graphprotocol/graph-ts';

export function isLpUniPair(name: string): boolean {
  for (let i=0;i<LP_UNI_PAIR_CONTRACT_NAME.length;i++) {
    if (name.toLowerCase().startsWith(LP_UNI_PAIR_CONTRACT_NAME[i])) {
      return true
    }
  }
  return false
}

export function isBalancer(name: string): boolean {
  for (let i=0;i<BALANCER_CONTRACT_NAME.length;i++) {
    if (name.toLowerCase().startsWith(BALANCER_CONTRACT_NAME[i])) {
      return true
    }
  }
  return false
}

export function isCurve(name: string): boolean {
  for (let i=0;i<CURVE_CONTRACT_NAME.length;i++) {
    if (name.toLowerCase().startsWith(CURVE_CONTRACT_NAME[i])) {
      return true
    }
  }
  return false
}

export function isSyncSwap(name: string): boolean {
  for (let i=0;i<SYNC_SWAP_CONTRACT_NAME.length;i++) {
    if (name.toLowerCase().startsWith(SYNC_SWAP_CONTRACT_NAME[i])) {
      return true
    }
  }
  return false
}


export function isUniswapV3(name: string): boolean {
  if (name.toLowerCase().startsWith(F_UNI_V3_CONTRACT_NAME)) {
    return true
  }
  return false
}

export function isMeshSwap(name: string): boolean {
  if (name.toLowerCase().startsWith(MESH_SWAP_CONTRACT)) {
    return true
  }
  return false
}

export function isCamelot(name: string): boolean {
  if (name.toLowerCase().startsWith(CAMELOT_CONTRACT)) {
    return true
  }
  return false
}

export function isPoisonFinanceToken(name: string): boolean {
  return name.toLowerCase() == POISON_FINANCE_CONTRACT;
}

export function checkBalancer(address: Address): boolean {
  const contract = WeightedPool2TokensContract.bind(address);
  return !contract.try_getPoolId().reverted
}

export function isWeth(address: Address): boolean {
  for (let i=0; i<WETH_LIST_ZK.length; i++) {
    if (address.toHexString().toLowerCase() == WETH_LIST_ZK[i]) {
      return true
    }
  }

  return false;
}

export function isBtc(address: Address): boolean {
  for (let i=0; i<BTC_ZK.length; i++) {
    if (address.equals(BTC_ZK[i])) {
      return true
    }
  }

  return false;
}

export function isVelcore(name: string): boolean {
  return !!name.toLowerCase().startsWith(VELOCORE_NAME.toLowerCase());
}