import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';
import wishReducer from './wishRedux';
import yourOrdersReducer from './yourOrdersRedux';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    wish: wishReducer,
    yourOrders: yourOrdersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export let persistor = persistStore(store);

// --------------------------------NO PERSIST----------------------------------------
// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//     user: userReducer,
//     wish: wishReducer,
//     yourOrders: yourOrdersReducer,
//   }
// })
