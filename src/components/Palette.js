function Palette(props){
    return (
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
    )
}

export default Palette;