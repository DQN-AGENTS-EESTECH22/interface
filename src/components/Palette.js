function Palette(props){
    return (
    <div className="bg-white p-4 mt-5">
            <h2 className="d-block">Palette</h2>
            <div className={'colors'}>
                {
                    Object.entries(props.colors).map((item) => {
                        return (
                            <div className={'item'}  key={item[0]}>
                                <p>{item[1]}</p>
                                <div className={'item-paint'} style={{ backgroundColor: item[1] }}/> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Palette;