import { React, useEffect, useState } from 'react';
import { CCard, CCardBody, CCardTitle } from '@coreui/react';
import axios from "axios";

export default function Page() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true); //setting loading 
        try {
            const response = await axios.get("https://react-app-backend-anlg.onrender.com");
            setArticles(response.data);
        } catch (error) {
            console.log("Error fetching the data: ", error);
        }finally{
            setLoading(false); //setting loading as false
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="main-body">
            <div onClick={fetchData} className="refresh-button">Refresh
            </div>
            <div className="refreshing">{loading ? "Refreshing...": ""}</div>
            <div className="card-holder">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <CCard key={index} className="card">
                            <div className="source">
                                <div className="source-name">Hindustan Times</div>
                                <div className="circle"></div>    
                            </div>
                            <CCardBody className='card-body'>
                                <CCardTitle className="card-title">
                                    {article.title || "No Title"}
                                </CCardTitle>
                            </CCardBody>
                        </CCard>
                    ))
                ) : (
                    <h3>Loading... </h3>
                )}
            </div>
        </div>
    );
}
