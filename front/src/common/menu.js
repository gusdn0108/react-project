export const admin_menu = [
    {
        label: 'Home',
        items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
        }]
    },
    {
        label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
                ]
            }
        ]
    },

];

export const user_side_menu = [
    {
        label: '???????????????', icon: 'pi pi-fw pi-search', to: '/Signup',
        items: [
            {
                label: '????????? ??????', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: '????????????', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
                ]
            }
        ]
    },
]

export const main_menu = [
    {
        label: 'Menu', icon: 'pi pi-fw pi-search',
        items: [
            { label: '??????', icon: 'pi pi-fw pi-bookmark', to: "/" },
            { label: '?????????', icon: 'pi pi-fw pi-bookmark', to: "/login" },
            { label: '????????????', icon: 'pi pi-fw pi-bookmark', to: "/signup" },

            { label: '?????? ????????? ?????????', icon: 'pi pi-fw pi-bookmark', to: "/board/list/outside" },
            { label: '?????? ????????? ?????????', icon: 'pi pi-fw pi-bookmark', to: "/board/list/inside" },

        ]
    },
]

