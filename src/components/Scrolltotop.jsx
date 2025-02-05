import {  useLocation } from 'react-router-dom';
import { useEffect } from 'react'


export default function Scrolltop () {
const { pathname} = useLocation();


 useEffect(() =>{
  window.scrollTo(0,0);
 }, [pathname]);
}