function Nav(props) {
    return (
        <nav>
            <ul>
                {
                    props.children.map((child) => {
                        return (
                            <li>
                                <a className={props.active === child.props.label ? 'active' : ''} href={child.props.link}>{child.props.label}</a>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    )
}

export default Nav