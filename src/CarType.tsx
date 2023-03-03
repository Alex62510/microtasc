export type DifCarType = {
    manufacturer: string
    model: string
}

type PropsType = {
    name: string
    facture: Array<DifCarType>
    model: Array<DifCarType>

}

export const TopRaiting = (props: PropsType) => {
    return (
        <div>
            <h1>{props.name}</h1>
            {
                props.facture.map((t) => {
                        return (
                            <div>
                                <li>
                       {t.manufacturer}
                                </li>
                            </div>)
                    }
                )
            }
                <div>
                <li>
                    {
                        props.model.map((t) => {
                            return (
                                <div>
                                    {t.model}
                                </div>)
                        }
                    )
                    }
                </li>
            </div>
        </div>
    )
}