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
            <page>
                {props.children}
            </page>
        </main>
    )
}

export default Layout;