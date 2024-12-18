import logo from "../assets/chef-claude-logo.png"

export default function Header()
{
    return (
        <>
            <header>
                <img className = "logo" src={logo} alt="Chef claude logo"></img>
                <h1 className="header-title">Chef Claude</h1>
            </header>
        </>
    )
}