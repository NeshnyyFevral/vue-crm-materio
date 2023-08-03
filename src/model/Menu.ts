export interface MenuLinks {
    title: string;
    route: { name: string };
    icon?: any;
}

export interface Menu {
    block_title: string;
    links: MenuLinks[]
}
