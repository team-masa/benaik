import React from 'react';


const ConfereneEvent = () => {
    return (
        <div>
            <div className="font-extrabold text-center text-2xl pt-10 ">
                <h1>These are some past Events</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 pl-10 pr-10 mt-10 mb-10 brightness-75">
                <div>
                    <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/BOG_CbEDhag"
                        title="We Are Sales Conference 2022 | The official aftermovie"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>

                <div>
                    <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/kN89S_vflwI"
                        title="Event Videography Tutorial - Highlight sequence editing"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>

                <div>
                    <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/XR-J9PGRBxU"
                        title="Event Video - ASFA Conference 2022 Highlights"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>

                <div>
                    <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/gQVu4sbaO_k" title="Biggest Forex Event In Ghana Tour ( Accra Edition )"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>

            </div>

        </div>
    )
}

export default ConfereneEvent 