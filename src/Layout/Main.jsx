import React, { useEffect } from 'react'
import Hero from '../Pages/Hero'
import { useState } from 'react'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CryptoStats from '../Pages/CryptoStats'
import Features from '../Pages/Features'
import Countdown from '../Pages/Countdown'
import Faq from '../Pages/Faq'
import Footer from '../Pages/Footer'



const Main = () => {
  const [timerDays, setTimerDays]= useState()
  const [timerHours, setTimerHours]= useState()
  const [timerMinutes, setTimerMinutes]= useState()
  const [timerSeconds, setTimerSeconds]= useState()

  let interval;

  const startTimer = ()=>{
    const countDownDate= new Date("November 4,2022").getTime();

    interval= setInterval(()=>{
      const now= new Date().getTime();

    const difference= countDownDate - now

    const days = Math.floor(difference/(24*60*60*1000))

    const hours = Math.floor(difference%(24*60*60*1000)/(1000*60*60))

    const minutes = Math.floor(difference%(60*60*1000)/(1000*60))

    const seconds = Math.floor(difference%(60*1000)/1000)

    if(difference<0){
      //stop Timer

      clearInterval(interval.current)
    }else{
      //Update Timer

      setTimerDays(days)
      setTimerHours(hours)
      setTimerMinutes(minutes)
      setTimerSeconds(seconds)
    }
    })
  }

  useEffect(()=>{
    startTimer()
  }, [])

  window.addEventListener('load', showText)

  function showText(){
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/633d6d4837898912e96cfef6/1gejv5pgj';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
  }

  return (
    <div>
      <Hero/>
      <CryptoStats/>
      <Features/>
      <Countdown timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Main