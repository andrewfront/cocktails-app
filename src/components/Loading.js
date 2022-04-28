const Loading = () => {
  return (
    <div className="wrapper">
        <div className="container">
            <main className="main">
                <div className="loading">
                    <div className="container">
                        <h5 className="loading__alert">Loading...</h5>
                        <div className="loading__inner">
                            <div className="loading__dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Loading