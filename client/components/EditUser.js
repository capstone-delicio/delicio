import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { updateUserThunk } from '../store/auth'
import {useSelector,useDispatch} from 'react-redux'


const EditUser = () => {
    const { id } = useParams()
    let history = useHistory()
    const user = useSelector(state=>state.auth)
    console.log('user',user)
    const dispatch = useDispatch()

    const [formState, setFormState] = useState({
        id:user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        preferred_city: user.preferred_city
    })

    // useEffect(() => {
    //     LoadUser()
    // }, [])
    const onChangeHandler = (e) => {
        // console.log(e.target.value)
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        // await axios.put(`/users/${id}`, user)
        dispatch(updateUserThunk(formState))
        history.push('/')

    }

    // const LoadUser = async () => {
    //     const result = await axios.get(`/users/${id}`)
    //     setUser(result.data)
    // }
    const { first_name, last_name, email, phone_number, preferred_city } = user
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
                                defaultValue={first_name}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Last Name'
                                name='last_name'
                                defaultValue={last_name}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Email'
                                name='email'
                                defaultValue={email}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Prederred City'
                                name='preferred_city'
                                defaultValue={preferred_city}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Phone'
                                name='phone_number'
                                defaultValue={phone_number}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>

                        <button className='btn btn-warning btn-block' onChange = {e => SubmitHandler(e)}>Update User</button>
                      </form>
                </div>

            </div>
        </div>
    )
}

export default EditUser
