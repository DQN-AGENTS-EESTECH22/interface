import Nav from "./Nav";

function Layout(props) {
    return (
        <main className={"container"}>
            <header>
                <Nav active={props.active}>
                    <item label={"Generate Palette - Image"} link={"/"}/>
                    <item label={"Generate Palette - Text"} link={"/text"}/>
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