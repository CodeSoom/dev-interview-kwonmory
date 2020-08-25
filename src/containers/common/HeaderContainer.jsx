import React, { useState } from 'react';

import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const [dropDownMenuActive, setDropdownMenuActive] = useState(false);

  const handleDropdownMenuActive = () => {
    setDropdownMenuActive(!dropDownMenuActive);
  };

  return (
    <Header
      onDropdownMenuActive={handleDropdownMenuActive}
      dropDownMenuActive={dropDownMenuActive}
    />
  );
};

export default HeaderContainer;
