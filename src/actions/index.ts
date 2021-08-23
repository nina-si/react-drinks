const drinkSelected = (drinkId: string) => {
  return {
    type: "DRINK_SELECTED",
    payload: drinkId,
  };
};

export { drinkSelected };
