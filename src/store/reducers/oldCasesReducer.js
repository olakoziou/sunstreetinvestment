const initialState = {
  error: null,
  oldCases: [
    {
      propertyId: 1,
      propertyName: 'Inwestycja #1 przy ul. Bożego Ciała',
      propertyDescription:
        'Szybka inwestycja – od pozyskania tematu do zakupu minęło 72 godz',
      type: 'Dom',
      buyPrice: 239999,
      sellPrice: 299999,
      notary: 3000,
      renovation: 1000,
      commissions: 1000,
      mthCosts: 1000,
      otherCosts: 10000,
      oldCase: true,
      year: 2010,
    },
    {
      propertyId: 1,
      propertyName: 'Dom w górach',
      propertyDescription: 'Piękny dom z widokiem na góry',
      type: 'Dom',
      buyPrice: 239999,
      sellPrice: 299999,
      notary: 3000,
      renovation: 1000,
      commissions: 1000,
      mthCosts: 1000,
      otherCosts: 10000,
      info: 'Szybka inwestycja – od pozyskania tematu do zakupu minęło 72 godz',
      metrage: 150,
      rooms: 10,
      mainImgUrl: 'xxx',
      oldCase: true,
      year: 2010,
    },
    {
      propertyId: 1,
      propertyName: 'Dom w górach',
      propertyDescription: 'Piękny dom z widokiem na góry',
      type: 'Dom',
      buyPrice: 239999,
      sellPrice: 299999,
      notary: 3000,
      renovation: 1000,
      commissions: 1000,
      mthCosts: 1000,
      otherCosts: 10000,
      info: 'Szybka inwestycja – od pozyskania tematu do zakupu minęło 72 godz',
      metrage: 150,
      rooms: 10,
      mainImgUrl: 'xxx',
      oldCase: true,
      year: 2010,
    },
  ],
};

const oldCasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OLDCASE_SUCCESS':
      console.log('ADD_OLDCASE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'ADD_OLDCASE_ERROR':
      console.log('ADD_OLDCASE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'ADDONWEB_OLDCASE_SUCCESS':
      console.log('ADDONWEB_OLDCASE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'ADDONWEB_OLDCASE_ERROR':
      console.log('ADDONWEB_OLDCASE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'DELETE_OLDCASE_SUCCESS':
      console.log('DELETE_OLDCASE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'DELETE_OLDCASE_ERROR':
      console.log('DELETE_OLDCASE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'SETBACK_OLDCASE_SUCCESS':
      console.log('SETBACK_OLDCASE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'SETBACK_OLDCASE_ERROR':
      console.log('SETBACK_OLDCASE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'EDIT_OLDCASE_SUCCESS':
      console.log('EDIT_OLDCASE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'EDIT_OLDCASE_ERROR':
      console.log('EDIT_OLDCASE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'HARDDELETE_OLDCASE_SUCCESS':
      console.log('HARDDELETE_OLDCASE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'HARDDELETE_OLDCASE_ERROR':
      console.log('HARDDELETE_OLDCASE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
};

export default oldCasesReducer;
