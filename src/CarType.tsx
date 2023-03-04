import PropTypes from "prop-types";

export type DifCarType = {
    manufacturer: string
    model: string
}

type PropsType = {
    name: string
    facture: Array<DifCarType>
    model: Array<DifCarType>
    modelCar: string

}

export const TopRaiting = (props: PropsType) => {
    return (
        <div>
            <table>
                    <tr>
                        <td>{props.name}</td>
                        {props.facture.map((t) => {
                                return (
                                    <td>
                                        {t.manufacturer}
                                    </td>
                                )
                            }
                        )
                        }
                    </tr>
                <tr>
                    <td>{props.modelCar}</td>
                        {props.facture.map((t) => {
                                return (
                                    <td>
                                        {t.model}
                                    </td>
                                )
                            }
                        )
                        }
                </tr>
            </table>
        </div>
    )
}
