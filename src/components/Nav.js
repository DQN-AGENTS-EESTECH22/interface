function Nav(props) {
    return (
        <nav>
            <ul>
                {
                    props.children.map((child) => {
                        return (
                            <li key={child.props.label}>
                                <a className={props.active === child.props.label ? 'active' : ''} href={child.props.link}>{child.props.label}</a>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    )
}

export default Nav