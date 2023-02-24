import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { API } from './api';
import Spinner from 'react-bootstrap/Spinner';
function Video() {

    const [videos, setVideos] = useState([])
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    const fetchVideo = async () => {
        try {
            const resp = await axios.post(`${API}/getVideoById`, { id: id }, {
                headers: { 'Content-Type': 'application/json' }
            })
            setVideos(resp.data.data)
            setLoader(false)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {

        fetchVideo();

    }, [])



    return (

        <Container fluid className="p-0 " style={{
            background: "black",
            height: "100vh",
        }}>




            <div className="spacer  mt-5">
                <div className="videoBox">
                    <ReactPlayer url={videos.video} controls autoplay muted={false} loop="true"
                        f
                        light={<img width={"640px"} height={"360px"} src={videos.thumbnail} alt='Thumbnail' />}

                    />

                </div>


                <div className="desc">
                    <p>
                        {videos.description}
                    </p>
                </div>

            </div>
            <div className="loader">
                {
                    loader && <Spinner size={30} variant='white' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }

            </div>

        </Container>

    )
}

export default Video