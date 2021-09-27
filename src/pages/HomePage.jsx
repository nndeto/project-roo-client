import '../css/HomePage.scss'

function HomePage() {
    // console.log(props)
    return (
        <main className = "hpage-main">
            <div className = "hpage-content">
                <h1 className = "hpage-title">Roo</h1>
            </div>
            <div className = "hpage-main-pic"></div>
            <div className = "hpage-wordbox">
                <p className = "hpage-p">Have an empty <span className = "hpage-accent">roo</span>m?</p>
                <p className = "hpage-p">In need of a <span className = "hpage-accent">roo</span>mmate?</p>
            </div>
            <div className = "hpage-filler-pic"></div>
            <div className = "hpage-wordbox-one">
                <p className = "hpage-p">Choose <span className = "hpage-accent">roo</span>.</p>
            </div>
            <div className = "hpage-footer-pic"></div>
        </main>
    )
}

export default HomePage;