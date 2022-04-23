function Palette(props){
    return (
        <div className={'colors'}>
            {
                Object.entries(props.colors).map((item) => {
                    return (<div key={item[0]} className={'item'} style={{ backgroundColor: item[1] }}/> )
                })
            }
        </div>
    )
}

export default Palette;