import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import  db  from '../../firebase';
import { storage }  from '../../firebase';

const Post = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState('')
    const [file, setFile] = useState(null)
    const [success, setSuccess] = useState('')
    const [visible, setVisible] = useState(false)

    //Setting the accepted file types
    const types =['image/png', 'image/jpeg']

    const handleSubmit = (e) => {
        e.preventDefault();


        // db.collection("paintings").add({
        //     title: title,
        //     price: price
        // })
        // .then(() => {
        //     setVisible(true)
        //     setSuccess('Post created!')
        //     setTitle('')
        //     setPrice('')
        // })
        // .catch((err) => { 
        //     console.log(err)
        //     setError('Failed to create post')
        //     setTitle('')
        //     setPrice('')
        // })

        //Start of upload here
        console.log('starting upload')
        console.log(file)
        const storageRef = storage.ref(file.name)
        console.log(storageRef)

        storageRef.put(file)
    }

    const handleImage = (e) => {
        console.log('changed')

        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
            setVisible('false')
        } else {
            setFile(null)
            setVisible(true)
            setError('Please select an image file (png or jpeg)')
            console.log('this ran')
        }
    }
    
    return (
        <div className="wrapper">
            {error && <Alert variant="danger" show={ visible } onClose={() => setVisible(false)} dismissible >{ error }</Alert>}
            {success && <Alert variant="success" show={ visible } onClose={() => setVisible(false)} dismissible>{ success }</Alert>}
            <div className="form-container">
                <form className="form" id="createAccountForm" onSubmit={ handleSubmit }>
                    <h1 className="form-title">Create Listing</h1>
                    <div className="input-group">
                        <input type="file" className="form-input" onChange={ handleImage } required  />
                    </div>
                    {/* <div className="input-group">
                        <input 
                            type="text" 
                            className="form-input"  
                            placeholder="Title" 
                            value={ title }
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="number" 
                            className="form-input"  
                            placeholder="price in US" 
                            value={ price }
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div> */}
                    <Button className="btn form-btn" type="submit">Post</Button> 
                </form>
            </div>
        </div>
    )
}

export default Post
