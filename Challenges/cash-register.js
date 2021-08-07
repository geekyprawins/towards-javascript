const moneyMap = {
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

const getTotalCid = (cid) =>
  cid.reduce((total, [unit, amount]) => total + amount, 0);

const safelyRoundMoney = (amount) => Math.round(amount * 100) / 100;

const checkCashRegister = (price, cash, cid) => {
  const change = [];
  let changeDue = cash - price;

  if (changeDue === getTotalCid(cid)) {
    return {
      status: 'CLOSED',
      change: cid,
    };
  }

  [...cid].reverse().forEach(([unit, amount]) => {
    const unitValue = moneyMap[unit];

    if (unitValue > changeDue) {
      return;
    }

    let unitsTaken = 0;

    while (changeDue >= unitValue && amount > 0) {
      changeDue = safelyRoundMoney(changeDue - unitValue);
      amount = safelyRoundMoney(amount - unitValue);
      unitsTaken++;
    }

    change.push([unit, unitsTaken * unitValue]);
  });

  if (changeDue > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  return {
    status: 'OPEN',
    change,
  };
};