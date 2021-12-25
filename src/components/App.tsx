import React, { useState } from "react";
import SemanticUiPage1 from "./SemanticUiPage1";
import SemanticUiPage2 from "./SemanticUiPage2";
import PageWithSticky from "./PageSticky";
import { Menu, MenuItemProps } from "semantic-ui-react";

enum MenuItems {
  SemanticUiPage1 = "SemanticUiPage1",
  SemanticUiPage2 = "SemanticUiPage2",
  PageWithSticky = "PageWithSticky",
}

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    MenuItems.PageWithSticky
  );

  const onMenuClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    if (!data.name) return;

    setSelectedMenuItem(data.name);
  };

  return (
    <>
      <Menu>
        <Menu.Item
          name={MenuItems.SemanticUiPage1}
          active={selectedMenuItem === MenuItems.SemanticUiPage1}
          onClick={onMenuClick}
        >
          Semantic UI Page 1
        </Menu.Item>

        <Menu.Item
          name={MenuItems.SemanticUiPage2}
          active={selectedMenuItem === MenuItems.SemanticUiPage2}
          onClick={onMenuClick}
        >
          Semantic UI Page 2
        </Menu.Item>

        <Menu.Item
          name={MenuItems.PageWithSticky}
          active={selectedMenuItem === MenuItems.PageWithSticky}
          onClick={onMenuClick}
        >
          Page With Sticky
        </Menu.Item>
      </Menu>
      {selectedMenuItem === MenuItems.SemanticUiPage1 && <SemanticUiPage1 />}
      {selectedMenuItem === MenuItems.SemanticUiPage2 && <SemanticUiPage2 />}
      {selectedMenuItem === MenuItems.PageWithSticky && <PageWithSticky />}
    </>
  );
};

export default App;
