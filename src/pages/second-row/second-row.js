import Card from "../../ui-kit/card/card"
import Maps from "../maps/map"

const SecondRow = (props) => {
    return(
        <>
            <div className="second-row-container">
                <Card>
                    <Maps></Maps>
                </Card>
                <Card></Card>
            </div>
        </>
    )
}

export default SecondRow;