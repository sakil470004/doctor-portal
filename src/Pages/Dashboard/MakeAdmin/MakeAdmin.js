import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth';

export default function MakeAdmin() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
        // console.log(e)
    }
    const handleAdminSubmit = e => {

        const user = { email }
        fetch('https://damp-island-23434.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    // alert('created Successfully')
                    setSuccess(true)
                } else {
                    // alert('something wrong')
                    setSuccess(false)

                }
                // empty input field
                // for name field need must and here name is email  
                e.target.email.value = ''
                setEmail('')
            })


        e.preventDefault();
    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}
                style={{ display: 'flex', justifyContent: 'center' }}

            >
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    variant="standard"
                    type='email'
                    name='email'

                    onBlur={handleOnBlur}
                />
                <Button size='small' type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>Made Admin Successfully</Alert>}
            {/* {!success && <Alert severity='error'>Problem occurred Making admin</Alert>} */}
        </div>
    )
}
