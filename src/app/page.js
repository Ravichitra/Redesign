 import './globals.css';
import styles from './page.module.css';

import Headercomp from "./components/header";
import Homepage from './components/homepage';
import Form from './components/form';

export default function Home() {
  return (
    <div className={styles.allpage} >
      <Headercomp/>
      <Homepage/>
      <Form/>
    </div>
  );
}
