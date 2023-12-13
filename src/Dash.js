import { useEffect, useState } from "react";
import './Dash.css'
import Select from 'react-select'
import individuals from "./individuals";
import companies from "./companies";
import products from "./products";
const Dash = (props) => {
    function handleChange(e) {
        setSelectedOption(e.value);
        setLoading(true);
        fetch(`https://tech-blogs-aggregator-api.vercel.app/feeds/${e.value}`).then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then((xml) => xml.querySelectorAll('item'))
            .then((items) => {
                const feedItems = [...items].map((el) => ({
                    link: el.querySelector("link").textContent,
                    title: el.querySelector("title").innerHTML,
                    pubDate: el.querySelector('pubDate').innerHTML,
                    description: el.querySelector("description") && el.querySelector("description").textContent
                }))
                setLoading(false);
                setItems(feedItems);
            })
            .catch(err => console.error(err))
    }
    const [loading, setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [items, setItems] = useState([]);
    const [type, setType] = useState(null);
    useEffect(() => {
        if (props.page === "company") {
            setType(companies)
        }
        else if (props.page === "individual") {
            setType(individuals)
        }
        else {
            setType(products)
        }
    });
    // if(loading){
    //     return (
    //         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    //       )
    // }
    return (
        <div className="container-fluid">
            <div className="row">
                <hr />
                <div className="col-md-3">
                    <h6><strong>select {props.page} below</strong></h6>
                    <Select defaultValue={selectedOption} options={type} key={type} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <hr />
            {loading === false && items.length<1 && selectedOption !=null?<h3>No results found!</h3>:null}
            {loading === true?<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />:
            <div>
            {/* <h5>Showing posts of: {selectedOption}</h5> */}
            <div className="row">{
                items.map(el =>
                    <div className="col-md-12" key={el.link}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{el.title.replace(/^<\!\[CDATA\[|\]\]>$/g, '')}</h5>
                                <h6>{el.pubDate}</h6>
                                <div className="card-text" dangerouslySetInnerHTML={{ __html: el.description }}></div>
                                <div className="link">
                                    <a href={el.link} target="_blank">Read Full</a>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
            </div></div>}
        </div>
    )

}

export default Dash;