import '../styles/globals.css';
import { parse } from 'node-html-parser';

function MyApp({ Component, pageProps }) {
  scrap()
  return <Component {...pageProps} />
}

function scrap(){
  if(typeof window === 'undefined'){
    fetch(`https://www.credly.com/users/yassine-el-mahi`).then((value)=>{
      value.text().then((text)=>{
        const root = parse(text);
        const badges = root.querySelector(".data-table-grid__rows").childNodes

        console.log(badges)
      })
    })
  }
}


export default MyApp
