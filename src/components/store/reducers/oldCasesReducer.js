const initialState = {
  oldCases: [
    {
      propertyId: 1,
      propertyName: 'Dom w górach',
      propertyDescription: 'Piękny dom z widokiem na góry',
      type: 'Dom',
      price: 299999,
      metrage: 150,
      rooms: 10,
      mainImgUrl: 'xxx',
      oldCase: true,
      year: 2010
    }
  ]
};

const oldCasesReducer = (state = initialState, action) => {
  return state;
};

export default oldCasesReducer;
