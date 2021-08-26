// const initialState = {
//   userData: {},
// };

// export const joinUsReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case REGISTRATION_SUCCESS: {
//       return {
//         ...state,
//         ...payload,
//         isReciever: true,
//       };
//     }
//     case REGISTRATION_FAIL: {
//       return {
//         ...state,
//         isReciever: false,
//         userDataReciever: null,
//       };
//     }
//     case JOIN_US_DATA_LOADED: {
//       return {
//         ...state,
//         isReciever: true,
//         userDataReciever: payload,
//       };
//     }
//     case JOIN_US_DATA_LOADED: {
//       return {
//         ...state,
//         isReciever: false,
//       };
//     }
//     default:
//       return state;
//   }
// };
