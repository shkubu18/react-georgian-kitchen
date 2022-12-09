import ArrowRight from "../../assets/icon/arrow-right.svg";

function goBack() {
    window.location.href = '/food-list';
}

export default function DetailKhinkali() {
    return (
        <div className="food-info-container">
            <div className="food-info">
                <div className="food-img-container">
                    <img src="https://cdn.tasteatlas.com/Images/Dishes/d9ae0ef06bc54f7cb4e6b5b928bc6f41.jpg" alt="food-img" />
                </div>
                <div className="food-detail-info">
                    <div>
                        <h1>Khinkali</h1>
                    </div>
                    <div className="food-description">

                        <p>Khinkali has a long history in Georgia, and these juicy dumplings are usually the first thing a
                            traveller tries when they first arrive in the country. Khinkali originated in the mountains, but
                            the dish has spread across the country, and Khinkali making has been refined to an art in the
                            capital, Tbilisi</p>
                        <hr />
                    </div>

                    <div>
                        <p>Who invented Khinkali</p>
                        <p>The short story says khinkali originated in the rugged mountains to the north of Tbilisi, where
                            people in the Tusheti and Pshavi regions both claim to have invented it.</p>
                    </div>
                    <div className="for-more-info khinkali">

                        <div>
                            <span>For More Information Click Buttton</span>
                            <img src={ArrowRight} alt="arrow-right-icon" />
                            <a href="https://en.wikipedia.org/wiki/Khinkali" target="_blank">
                                <button type="submit">More Info...</button>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
            <div className="go-back">
                <a onClick={goBack}><button type="submit">Go Back</button></a>
            </div>
        </div>
    )
}


