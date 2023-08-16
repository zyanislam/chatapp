import { Model, Error } from "../index";
import images from "../../..assets";
import { useContext } from "react";


const NavBar = () => {
    const MenuItems = [
        {
            menu: "All Users",
            link: "allusers",
        },
        {
            menu: "CHAT",
            link: "/",
        },
        {
            menu: "CONTACT",
            link: "/",
        },
        {
            menu: "SETTING",
            link: "/",
        },
        {
            menu: "FAQS",
            link: "/",
        },
        {
            menu: "TERM OF USE",
            link: "/",
        },
    ];
    //UseState
     const [active. setActive] = useState(2);
     const [open. setOpen] = useState(false);
     const [openModel. setOpenModel] = useState(false);

     const { account, userName, connetWallet } = useContext(ChatAppContect);
    return (
        <div className={Style.NavBar}>
            <div className={Style.NavBar_Box}>
            <div className={Style.NavBar_Box_left}>
                <Image src={images.logo} alt="logo" width={50} heigh={50}>
            </div>
            <div className={Style.NavBar_Box_right}>
            <div className={Style.NavBar_Box_right_menu}>
                {menuItems.map((el, i)=> (
                    <div onClick={()=> setActive(i + 1)} key={1+1} className={`$
                {Style.NavBar_Box_right_menu_items} ${active == i + 1 ? Style.active_btn : ""
            
                    }}`}
                    >
                        <Link className={Style.NavBar_Box_right_menu_items_link}
                        href={el.link}
                        >
                            {el.menu}
                        </Link>
                    </div>
                ))}
            
                </div>
            </div>
            </div>
    );

};


export default NavBar;