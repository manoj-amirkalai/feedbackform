"use client"
import styles from "./page.module.css";
import HomePage from "./../components/HomePage/HomePage";
import { Provider } from "react-redux";
import store from '../components/store/store'
export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
