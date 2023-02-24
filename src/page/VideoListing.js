import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { API } from './api'
function VideoListing() {

    const [videos, setVideos] = useState([])

    const fetchVideo = async () => {
        try {
            const resp = await axios(`${API}/getVideo`)
            setVideos(resp.data.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        fetchVideo();
    }, [])

    return (

        <Container fluid className="p-0 mt-5 ">

            <div className="spacer">

                <h1 className='my-4'>
                    Your Videos
                </h1>

                <div className="videoCard">
                    <Row>
                        {
                            videos && videos.map((item, index) => {
                                return (
                                    <Col lg={3} className="mb-4" key={index}>
                                        <Link to={`/view/${item._id}`}>

                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={item.thumbnail} />
                                                <Card.Body>
                                                    <Card.Text>
                                                        {
                                                            item.title.substring(0, 30)
                                                        }...
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>

                                        </Link>

                                    </Col>
                                )
                            })

                        }



                    </Row>



                </div>


            </div>

        </Container>

    )
}

export default VideoListing