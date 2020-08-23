import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { signin as sg } from '../store/atoms'


import Axios from '../store/axiosInstance'

function Signin() {

    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setSignin = useSetRecoilState(sg)

    async function DoLogin(event) {
        event.preventDefault()
        try {
            const response = await Axios.post('/login', { email, password })
            console.log(response)
            setSignin(true)
        }
        catch (error) {
            setErrorMessage(error.response)
            console.log(error.response)
            console.log("Error in Login", error.name, error.message)
        }
    }

    function inputHandler(event) {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }

    function scrollto() {
        // document.querySelector('.logincontainer').scrollIntoView()
    }
    return (
        <div>
            <div>
                <form onSubmit={DoLogin}>
                    <div>
                        <h2>Sign In</h2>
                    </div>
                    <div>
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                    <div >
                        <label htmlFor='i1' ><span >Email</span></label>
                        <input autoFocus onClick={scrollto} autoComplete tabIndex="1" onChange={inputHandler} value={email} type="email" placeholder="eg. a@g.com" required id='i1' name='email' />

                        <label htmlFor='i2' ><span >Password</span></label>
                        <input tabIndex="2" autoComplete="current-password" onChange={inputHandler} value={password} type="password" required id='i2' name='password' />

                    </div>
                    <div className="submit">
                        <button tabIndex="3" type='submit'  >Signin</button>
                    </div>
                    <div className="forgot">
                        <Link tabIndex="4" to="/"> </Link>
                        <Link tabIndex="5" to="/signup"></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin