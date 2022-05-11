import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const EditUser = () => {
    const { id } = useParams()
    let history = useHistory()
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_namuber: '',
        preferred_city: ''
    })

    useEffect(() => {
        LoadUser()
    }, [])
    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        await axios.put(`/users/${id}`, user)
        history.push('/')

    }

    const LoadUser = async () => {
        const result = await axios.get(`/users/${id}`)
        setUser(result.data)
    }
    const { first_name, last_name, email, phone_namuber, preferred_city } = user
    return (
        <div>
            <div className='container'>
                <div className='profile'>
                    <h2 className='profile-info'>Update User</h2>
                    <form onSubmit={e => SubmitHandler(e)}>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your First Name'
                                name='first_name'
                                value={first_name}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Last Name'
                                name='last_name'
                                value={last_name}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Email'
                                name='email'
                                value={email}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Prederred City'
                                name='preferred_city'
                                value={preferred_city}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Phone'
                                name='phone_number'
                                value={phone_number}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <button className='btn btn-warning btn-block'>Update User</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EditUser
