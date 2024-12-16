import logo from "../assets/chef-claude-logo.png"

export default function Header()
{
    return (
        <>
            <header>
                <img class = "logo" src={logo} alt="Chef claude logo"></img>
                <h1 class="header-title">Chef Claude</h1>
            </header>
        </>
    )
}