import * as React from "react";

export interface State {
    Imagen: string[],
    KPI: number[],
    Ranking: number[],
    ISelectionId: number[]
}

export const initialState: State = {
    Imagen: [""],
    KPI: [0],
    Ranking: [],
    ISelectionId: []
}


export class RankingGrid extends React.Component<{}, State>{
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof RankingGrid.updateCallback === 'function') {
            RankingGrid.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        RankingGrid.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        RankingGrid.updateCallback = null;
    }

    render() {
        return (
            <div className="App">
                <div className='contenedor'>
                    {this.state.Imagen.map(
                        (x, i) => {
                            return (
                                <div className="producto">
                                    <div className="imagen">
                                        <img key={i} className='foto' src={x} alt="" />
                                    </div>
                                    <div className='recuadro' key={i} >
                                        <div className='rank'>
                                            <p>{this.state.Ranking[i]}</p>
                                        </div>
                                        <div className='label'>
                                            <p>{this.state.KPI[i].toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                                        </div>
                                    </div>
                                    <div className="marcas">
                                        <div className="dr"></div>
                                        <div className="dr"></div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div >
        )
    }
}
export default RankingGrid;