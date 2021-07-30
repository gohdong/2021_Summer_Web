'use strict';

class Content extends React.Component {
    render() {
        return (
            <div className="job">
                <div className="job-img-box">
                    <img className="job-img"
                         src="https://www.terminix.co.kr/wp-content/uploads/2020/03/placeholder.png" alt="."/>
                </div>

                <div className="job-main">


                    <div className="job-title">
                        <img src="https://www.terminix.co.kr/wp-content/uploads/2020/03/placeholder.png" alt="."
                             className="company-img"/>
                        <div>
                            <p className="position-name">Position</p>
                            <div className="company-info">

                                <p className="company-name">Company Name</p>
                                <p className="company-address">Address</p>
                            </div>
                        </div>
                        <svg width="26" height="26" viewBox="0 0 26 26" className="bookmark">
                            <path d="M19 22L13 17 7 22V6C7 4.9 7.8 4 8.7 4H17.3C18.2 4 19 4.9 19 6V22Z"
                                  fill="#656668"></path>
                        </svg>
                    </div>
                    <p className="job-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at
                        atque, aut deserunt doloremque doloribus eius ipsam iusto maiores molestiae nihil, odit officiis
                        omnis placeat quae quis repellendus veniam voluptate?</p>
                    <ul>
                        <li>requirement1</li>
                        <li>requirement2</li>
                        <li>requirement3</li>
                    </ul>
                </div>


            </div>
        );
    }

}

class MainContents extends React.Component {
    render() {
        const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <div>
                <div className="small-device-category">
                    <p>전체 채용</p>
                </div>
                <h1 className="directory-title">전체 채용</h1>
                <div className="jobs-grid">
                    {counter.map((value, index) => <Content key={value}/>)}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<MainContents/>, document.getElementsByClassName('contents-box')[0]);