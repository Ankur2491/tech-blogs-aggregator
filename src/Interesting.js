import { useEffect, useState } from "react";
import links from "./interestingLinks";
export default function Interesting() {
    const [headings, setHeadings] = useState([]);
    useEffect(() => {
        let heads = Object.keys(links);
        setHeadings(heads);
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    headings.map(heading =>
                        <div key={heading} className="col-md-12">
                            <h3 style={{ textAlign: 'left' }}>{heading}</h3>
                            <div className="row">
                                {
                                    Object.keys(links[heading][0]).map(content =>
                                        <div key={content} className="col-md-12" style={{ textAlign: 'left' }}>
                                            <a target="_blank" href={links[heading][0][content]}>{content}</a>
                                        </div>)
                                }
                            </div>
                            <hr />
                        </div>
                    )
                }

            </div>
        </div>
    )
}