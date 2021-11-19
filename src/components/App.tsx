import React, { useState } from "react";
import SemanticUiPage1 from "./SemanticUiPage1";
import SemanticUiPage2 from "./SemanticUiPage2";
import { Menu, MenuItemProps } from "semantic-ui-react";

enum MenuItems {
  SemanticUiPage1 = "SemanticUiPage1",
  SemanticUiPage2 = "SemanticUiPage2",
}

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    MenuItems.SemanticUiPage1
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
      </Menu>
      {selectedMenuItem === MenuItems.SemanticUiPage1 ? (
        <SemanticUiPage1 />
      ) : (
        <SemanticUiPage2 />
      )}
    </>
  );
};

export default App;
