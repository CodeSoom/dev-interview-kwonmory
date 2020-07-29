import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const accessToken = useSelector((state) => state.accessToken);
  const [dropDownMenuActive, setDropdownMenuActive] = useState(false);

  const handleDropdownMenuActive = () => {
    setDropdownMenuActive(!dropDownMenuActive);
  };

  return (
    <Header
      login={accessToken}
      onDropdownMenuActive={handleDropdownMenuActive}
      dropDownMenuActive={dropDownMenuActive}
    />
  );
};

export default HeaderContainer;
