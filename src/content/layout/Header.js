import React from 'react';
import { Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Link to="/">Wanderion</Link>
            </Menu.Item>
            <Menu.Item key="app">
              <Link to="/starmaps">Starmaps</Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">More From Us</span>
              }
            >
              <Menu.ItemGroup title="Service">
                <Menu.Item key="setting:1">Prints</Menu.Item>
                <Menu.Item key="setting:2">Phone Case</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        );
    }
}

export default Header;