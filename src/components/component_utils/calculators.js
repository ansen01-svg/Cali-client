//bet amount calculator---------------
export let calculateBetAmount = (inputValue, w1, totalOdds) => {
  if (inputValue === 0 && w1 === 0 && totalOdds === 0) {
    return 0;
  }
  let result = Math.round((inputValue * 1) / w1 / totalOdds);
  return result;
};

//returns calculator------------------
export let calculateReturns = (inputValue, ownOdd, totalOdds, odd1, odd2) => {
  if (
    inputValue === 0 &&
    ownOdd === 0 &&
    totalOdds === 0 &&
    odd1 === 0 &&
    odd2 === 0
  ) {
    return 0;
  }

  let currentBetAmount = calculateBetAmount(inputValue, ownOdd, totalOdds);
  let otherBetAmount1 = calculateBetAmount(inputValue, odd1, totalOdds);
  let otherBetAmount2 = calculateBetAmount(inputValue, odd2, totalOdds);

  let result = Math.round(
    currentBetAmount * ownOdd - otherBetAmount1 - otherBetAmount2
  );
  return result;
};

//total adds percentage calculator-----
export let oddsPercentage = (w1, x, w2) => {
  if (!w1 || !x || !w2) return 0;

  return Math.round((1 / w1 + 1 / x + 1 / w2) * 1000) / 1000;
};

//new state constructor----------------
export let oddsConstructor = ({ state, fixture, e }) => {
  if (state.totalAmount && !e) {
    let newState = oddsWithAmount(state, fixture);
    return newState;
  }
  if (e) {
    let newState = oddsWithInputValue(state, e);
    return newState;
  }

  let newState = oddsWithoutAmount(state, fixture, e);
  return newState;
};

//new states---------------------------
let oddsWithAmount = (state, fixture) => {
  let totalOdds = oddsPercentage(fixture.w1, fixture.x, fixture.w2);

  let updatedState = {
    ...state,
    w1: {
      odd: fixture.w1,
      betAmount: calculateBetAmount(state.totalAmount, fixture.w1, totalOdds),
      returns: calculateReturns(
        state.totalAmount,
        fixture.w1,
        totalOdds,
        fixture.x,
        fixture.w2
      ),
    },
    x: {
      odd: fixture.x,
      betAmount: calculateBetAmount(state.totalAmount, fixture.x, totalOdds),
      returns: calculateReturns(
        state.totalAmount,
        fixture.x,
        totalOdds,
        fixture.w1,
        fixture.w2
      ),
    },
    w2: {
      odd: fixture.w2,
      betAmount: calculateBetAmount(state.totalAmount, fixture.w2, totalOdds),
      returns: calculateReturns(
        state.totalAmount,
        fixture.w2,
        totalOdds,
        fixture.w1,
        fixture.x
      ),
    },
    totalOdds,
  };
  return updatedState;
};

let oddsWithoutAmount = (state, fixture) => {
  let updatedOdds = {
    ...state,
    w1: { odd: fixture.w1, betAmount: 0, returns: 0 },
    x: { odd: fixture.x, betAmount: 0, returns: 0 },
    w2: { odd: fixture.w2, betAmount: 0, returns: 0 },
    totalOdds: oddsPercentage(fixture.w1, fixture.x, fixture.w2),
  };
  return updatedOdds;
};

let oddsWithInputValue = (state, e) => {
  let inputValue = e.target.value;

  let updatedState = {
    ...state,
    w1: {
      ...state.w1,
      betAmount: calculateBetAmount(inputValue, state.w1.odd, state.totalOdds),
      returns: calculateReturns(
        inputValue,
        state.w1.odd,
        state.totalOdds,
        state.x.odd,
        state.w2.odd
      ),
    },
    x: {
      ...state.x,
      betAmount: calculateBetAmount(inputValue, state.x.odd, state.totalOdds),
      returns: calculateReturns(
        inputValue,
        state.x.odd,
        state.totalOdds,
        state.w1.odd,
        state.w2.odd
      ),
    },
    w2: {
      ...state.w2,
      betAmount: calculateBetAmount(inputValue, state.w2.odd, state.totalOdds),
      returns: calculateReturns(
        inputValue,
        state.w2.odd,
        state.totalOdds,
        state.w1.odd,
        state.x.odd
      ),
    },
    [e.target.name]: inputValue,
  };
  return updatedState;
};
