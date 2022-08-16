import './navigation.scss';

function Navigation() {
    return (
        <div className="sidebar" >
            <div className="sidebar__container" >
                <h1 className="sidebar__initial" >CT</h1>
                <div className="sidebar__header" >
                    <h3 className="sidebar__nav">home</h3>
                    <h3 className="sidebar__nav" >about</h3>
                    <h3 className="sidebar__nav" >projects</h3>
                    <h3 className="sidebar__nav" >contact</h3>
                </div>
            </div>
        </div>
    );
}

export default Navigation;