import './content.css';

const Content = (props) =>{
    const {dataCenterDetails} = props
    const {countryName, cityName, centerName, healthStatus } = dataCenterDetails
    
    const statusChildBar = {
        width: `${healthStatus}%`,
        height: 2,
        left: 7.33,
        top: 36,
        background: "#00FF0A",
        borderRadius: 15,
    }
    return(
        <div className="container">
            <h1 className="names">{countryName}</h1>
            <h1 className="names">{cityName}</h1>
            <h1 className="names">{centerName}</h1>
            <span>Health Status</span>
            <span>{`${healthStatus}%`}</span>
            <div>               
                <div className="status-parent-bar">
                    <div style={statusChildBar} className="status-child-bar"></div>
                </div>
            </div>
        </div>
    )
}
export default Content