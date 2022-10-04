import React, { useEffect } from 'react'
import Hero from '../Pages/Hero'
import { useState } from 'react'
import CryptoStats from '../Pages/CryptoStats'
import Features from '../Pages/Features'
import Countdown from '../Pages/Countdown'


const Main = () => {
  const [timerDays, setTimerDays]= useState()
  const [timerHours, setTimerHours]= useState()
  const [timerMinutes, setTimerMinutes]= useState()
  const [timerSeconds, setTimerSeconds]= useState()

  let interval;

  const startTimer = ()=>{
    const countDownDate= new Date("November 4, 2022").getTime();

    interval= setInterval(()=>{
      const currentDate= new Date().getTime();

    const difference= countDownDate - currentDate

    const days = Math.floor(difference/(24*60*60*1000))

    const hours = Math.floor(difference%(24*60*60*1000)/(1000*60*60))

    const minutes = Math.floor(difference%(60*60*1000)/(1000*60))

    const seconds = Math.floor(difference%(60*1000)/(1000))

    if(difference<0){
      //stop

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
  })

  return (
    <div>
      <Hero/>
      <CryptoStats/>
      <Features/>
      <Countdown timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSecoonds={timerSeconds}/>
    </div>
  )
}

export default Main