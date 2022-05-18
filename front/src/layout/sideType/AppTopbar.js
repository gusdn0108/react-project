import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const AppTopbar = ({isAdmin,onToggleMenuClick, onMobileTopbarMenuClick, mobileTopbarMenuActive,onMobileSubTopbarMenuClick }) => {

    return (
        <div className="layout-topbar">
            {isAdmin?
             <Link to="/" className="layout-topbar-logo">
             <span>아직안정함</span>
         </Link>:null}
           

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': mobileTopbarMenuActive })}>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={onMobileSubTopbarMenuClick}>
                            <i className="pi pi-calendar"/>
                            <span>Events</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={onMobileSubTopbarMenuClick}>
                            <i className="pi pi-user"/>
                            <span>Profile</span>
                        </button>
                    </li>
                </ul>
        </div>
    );
}

  AppTopbar.propTypes = {

  };
AppTopbar.default= {
 };