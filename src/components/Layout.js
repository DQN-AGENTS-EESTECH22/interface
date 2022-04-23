import { useEffect } from "react";
import Nav from "./Nav";

function Layout(props) {
    useEffect(() => {
        let stringRequest = `http://127.0.0.1:9000/update-style?hex1=282828&hex2=F6F7F7`
        fetch(stringRequest);
    }, [])
    return (
        <main className={"container"}>
            <header>
                <Nav active={props.active}>
                    <item label={"Generate Palette - Image"} link={"/"}/>
                    <item label={"Generate Palette - Text"} link={"/text"}/>
                    {/* <item label={"Previewer"} link={"/previewer"}/> */}
                </Nav>

            </header>
            <div>
                {props.children}
            </div>
        </main>
    )
}

export default Layout;