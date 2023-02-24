import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { API } from "./api"
import axios from 'axios';

function Home() {
    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState({
        title: "",
        description: "",
    })


    const handleText = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({ ...form, [name]: value })
    }
    const handleImage = (e) => {
        console.log(e.target.files);
        setForm({
            ...form, image: e.target.files[0]
        })
    }

    const handleVideo = (e) => {
        console.log(e.target.files[0]);
        setForm({
            ...form, video: e.target.files[0]
        })
    }

    // submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            axios.post(`${API}/upload`, form, config).then((response) => {
                // console.log(response.data);
                setLoader(false);
                alert('Upload Successfully')
            });

        } catch (error) {
            console.log(error);
        }

    }






    return (

        <Container fluid className="p-0 mt-5">


            <div className="spacer">

                <h1 className='my-4'>
                    Upload Your Video
                </h1>

                <div className="textForm">
                    <form onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Title (max-length : 50)</label>
                            <input type="text" class="form-control" name="title" value={form.title} onChange={handleText} id="exampleFormControlInput1" placeholder="My name is john" maxLength={50} required={true} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description (max-charactor:200)</label>
                            <textarea class="form-control" name="description" value={form.description} onChange={handleText} id="exampleFormControlTextarea1" rows="3" required={true}></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="formFile" class="form-label">Choose Thumbnail</label>
                            <input class="form-control" type="file" accept="image/*" onInput={(e) => handleImage(e)} id="formFile" required={true} />
                        </div>

                        <div class="mb-3">
                            <label for="formFile" class="form-label">Upload Video</label>
                            <input class="form-control" type="file" accept="video/*"
                                onInput={(e) => handleVideo(e)}
                                id="formFile"
                                required={true}
                            />
                        </div>


                        <div className="my-5">

                            {/*<button className='btn-upload' onClick={() => submitForm()}>upload</button>
                        */}
                            <button className='btn-upload'>upload</button>
                        </div>

                    </form>
                </div>

                <div className="loader">
                    {
                        loader && <Spinner size={30} variant='success' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }

                </div>
            </div>


        </Container>

    )
}

export default Home