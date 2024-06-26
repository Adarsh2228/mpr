import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Shop from '../components/Shop/Shop';
import ItemView from '../routes/ItemView';
import CategoryView from '../routes/CategoryView';
import SearchView from '../routes/Search';
import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Wishlist from '../components/Wishlist';
import WishItemsProvider from '../Context/WishItemsProvider';
import SearchProvider from '../Context/SearchProvider';
import Payment from '../components/Payment';

function App() {
  return (
    <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router>
            <div className="App">
              <Header />
              <div className="content">
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/account">
                    <Route path="me" element={<MyAccount />} />
                    <Route path="manage" element={<ManageAccount />} />
                    <Route path="*" element={<Login />} />
                  </Route>
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/category/:id" element={<CategoryView />} />
                  <Route path="/item">
                    <Route path="men/:id" element={<ItemView />} />
                    <Route path="women/:id" element={<ItemView />} />
                    <Route path="kids/:id" element={<ItemView />} />
                    <Route path="featured/:id" element={<ItemView />} />
                  </Route>
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/search/*" element={<SearchView />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/payment*" element={<Payment />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
    </CartItemsProvider>
  );
}

export default App;