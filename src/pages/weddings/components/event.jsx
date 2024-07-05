

const WeddingEvents = () => {
    return (
        <div>
            <div className="text-center font-extrabold text-2xl pt-10">
                <h2>See some of our Wedding Events</h2>
            </div>
            <div className="grid grid-cols-2 gap-10 pl-10 pr-10 brightness-75 mt-5">

            <div>
                <iframe 
                    width="600" 
                    height="400" 
                    src="https://www.youtube.com/embed/BiKxhWiHz58" 
                    title="Best Congolese🇨🇩 Couple dance🔥 - [ Andrew & Pretty ] Congolese Wedding #pasashots" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <p className="font-bold text-center">This exquisite ring symbolizes eternal love and commitment.</p>
            </div>

            <div>
                <iframe 
                    width="600"
                    height="400" 
                    src="https://www.youtube.com/embed/yMJMj-nzINY" 
                    title="LISA & ANDREW WEDDING | Bridal Party Entrances" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <p className="font-bold text-center">A perfect blend of elegance and sophistication for your special day.</p>
            </div>

            <div>
                <iframe 
                    width="600" 
                    height="400" 
                    src="https://www.youtube.com/embed/P_4pZ6F4PJM" 
                    title="Sylvia + Steve" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <p className="font-bold text-center">A timeless piece that captures the essence of everlasting love.</p>
            </div>

            <div>
                <iframe 
                    width="600" 
                    height="400" 
                    src="https://www.youtube.com/embed/tX4fWlR87Hw" 
                    title="The Official Wedding Video of The BEAM Squad" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <p className="font-bold text-center">Celebrate your love story with this stunning and unique ring.</p>
            </div>
            </div>

            
        </div>
    );
}

export default WeddingEvents;
