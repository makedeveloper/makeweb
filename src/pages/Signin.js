import React from 'react'

import {  useSetRecoilState } from 'recoil'
import { signin as sg } from '../store/atoms'


function Signin() {

    const setSignin = useSetRecoilState(sg)
    setSignin(true)
    return <section> <p>Your html here</p> </section>
}

export default Signin