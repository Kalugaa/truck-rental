
import { DetailsListContainer } from '../DetailsListContainer'
import { VehicleTable } from '../VehicleTable'
import { ReservationForm } from '../ReservationForm'

export const Features = ({ item }) => {
    return (
        <div style={{
            display: 'flex', gap: 24
        }}>
            <div style={{ width: 430, display: 'flex', flexDirection: "column", gap: 44, marginTop: 44 }}>
                <DetailsListContainer items={item} isInModal={true} />
                <VehicleTable items={item} />
            </div>
            <div>
                <ReservationForm />
            </div>
        </div>
    )
}
