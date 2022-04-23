import Nav from "./Nav";

function Layout(props) {
    return (
        <main className={"container"}>
            <header>
                <Nav active={props.active}>
                    <item label={"Generate Pallete"} link={"/"}/>
                    <item label={"Previewer"} link={"/previewer"}/>
                </Nav>

            </header>
            <div>
                {props.children}
            </div>
        </main>
    )
}

export default Layout;